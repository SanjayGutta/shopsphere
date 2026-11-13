
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UsersLogin = () => {
  let navigate = useNavigate()
  let [usersData, setusersData] = useState([])

  let fetchiapi = async () => {
    try {
      let resp = await axios.get(`http://localhost:4000/users`)
      setusersData(resp.data)
    } catch (error) {
      toast.error(`failed to fetch:${error}`)
    }
  }

  useEffect(() => {
    fetchiapi()
  }, [])

  let allusersemails = usersData.map(elem => elem.email)

  let [formData, setFormdata] = useState({
    emailfield: "",
    Passwordfield: ""
  })

  let handleInput = (e) => {
    let key = e.target.name
    let val = e.target.value

    setFormdata({
      ...formData,
      [key]: val
    })
  }

  let handleSubmit = (e) => {
    e.preventDefault()

    let { emailfield, Passwordfield } = formData

    let emailindex = allusersemails.indexOf(emailfield)
    let successborder = 'solid 2px green'
    let errorborder = 'solid 2px red'

    if (emailindex !== -1) {
      e.target[0].style.border = successborder

      let userpassword = usersData[emailindex].Password

      if (Passwordfield === userpassword) {
        toast.success("Login Success")
        e.target[1].style.border = successborder

        localStorage.setItem('userLogin', 'true')

        navigate('/usersportal', { replace: true })
      }
      else {
        toast.error("password is invalid")
        e.target[1].style.border = errorborder
      }
    }
    else {
      toast.error("email is invalid")
    }
  }

  return (
    <>
      <div className="user-login">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Your E-mail Address"
            onChange={handleInput}
            name="emailfield"
            value={formData.emailfield}
            required
          />

          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={handleInput}
            name="Passwordfield"
            value={formData.Passwordfield}
            required
          />

          <button type="submit">
            User Login
          </button>
        </form>
      </div>
    </>
  )
}

export default UsersLogin
