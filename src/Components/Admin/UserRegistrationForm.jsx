import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UserRegistrationForm = () => {
    //todo: Api fetching from users
    let navigate=useNavigate()
    let errmsz = useRef()
    let [userdata, setUsersData] = useState([])
    let fetchApi = async () => {
        let usersapi = await axios.get(`http://localhost:4000/users`)
        setUsersData(usersapi.data)
    }
    useEffect(() => {
        fetchApi()
    }, [])

    let allUsersEmail = userdata.map(elem => elem.email)

    //todo:collect input value and update
    let [users, setUsers] = useState({
        id: "",
        username: "",
        contact: "",
        email: "",
        Password: "",
        dob: "",
        place: ""
    })
    let handleinput = (e) => {
        let key = e.target.name
        let val = e.target.value

        setUsers({
            ...users,
            [key]: val
        })
    }
    let handleSubmit = async (e) => {
        e.preventDefault()

        try {
            let emailInput = users.email
            let bool = allUsersEmail.includes(emailInput)
            if (bool) {
                toast.error("email is already exists")
                errmsz.current.innerText = "Email is Already Exists"
                e.target[2].style.border = "2px solid red"
            }
            else {
                errmsz.current.innerText = ""
                e.target[2].style.border = 'none'
                await axios.post(`http://localhost:4000/users`, users)
                toast.success(`user is Registered`)
                setUsers({
                    id: "",
                    username: "",
                    contact: "",
                    email: "",
                    Password: "",
                    dob: "",
                    place: ""
                })
                navigate(`/adminportal/usersdetails`)
            }
        } catch (error) {
            toast.error(`user is not Register:${error}`)
        }

    }
    return (
        <>
            <div className="register">
                <div className='header'>
                    <h1>Register Form</h1>
                    <button onClick={()=>navigate(`/adminportal/usersdetails`)}>Register Users</button>
                </div>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <label>
                            UserName:
                            <input type="text"
                                placeholder='Enter Your Name'
                                onChange={handleinput}
                                name='username'
                                value={users.username}
                                required

                            />
                        </label>
                        <label>
                            Contact:
                            <input type="tel"
                                placeholder='Enter Your Mobile Number'
                                onChange={handleinput}
                                name='contact'
                                value={users.contact}
                                required

                            />
                        </label>
                        <label>
                            Email:
                            <input type="email"
                                placeholder='Enter Your email Adress'
                                onChange={handleinput}
                                name='email'
                                value={users.email}
                                required
                            />
                        </label>
                        <div ref={errmsz} style={{ color: "red", textAlign: "right" }}></div>
                        <label>
                            Password:
                            <input type="password"
                                placeholder='Enter Your Password'
                                onChange={handleinput}
                                name='Password'
                                value={users.Password}
                                required
                            />
                        </label>
                        <label>
                            Date Of Birth:
                            <input type="date"
                                placeholder='Enter Your Date Of Birth'
                                onChange={handleinput}
                                name='dob'
                                value={users.dob}
                                required
                            />

                        </label>
                        <label>
                            Place:
                            <input type="text"
                                onChange={handleinput}
                                placeholder='Enter Your Location'
                                name='place'
                                value={users.place}
                                required
                            />
                        </label>
                        <button>
                            Register
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default UserRegistrationForm
