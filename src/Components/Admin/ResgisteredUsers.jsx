import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const ResgisteredUsers = () => {
    let [usersData,setusersData]=useState([])
    let fetchiapi=async()=>{
        try {
           let resp=await axios.get(`http://localhost:4000/users`) 
           setusersData(resp.data)
        } catch (error) {
            toast.error(`failed to fetch:${error}`)
        }
    }
    useEffect(()=>{
        fetchiapi()
    },[])
    // console.log(usersData);

    let handleDelete=async(id,username)=>{
        try {
          let bool= window.confirm(`Do you want delete this ${username} details...?`)
           if(bool){
           axios.delete(`http://localhost:4000/users/${id}`)
           toast.success(`User Data is Deleted`)
           setTimeout(()=>{
            window.location.reload()
           },2000)
           }
           else{
            toast.warn(`User Details is Not Deleted`)
           }
        } catch (error) {
            toast.error(`User Details is Not Deleted:${error}`)
        }
    }
    
  return (
   <>
   <div className="registered-users">
    <h1>Registerd Users</h1>
    <div className="container">
        <table border={1}>
            <thead>
                <tr>
                    <th>Slno</th>
                    <th>UserName</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Date Of Birth</th>
                    <th>Age</th>
                    <th>Place</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {usersData.map((elem,index)=>{
                    let {id,username,contact,email,Password,dob,place}=elem
                    return(
                        <tr key={index}>
                            <th>{index+1}.</th>
                            <td>{username}</td>
                            <td>{contact}</td>
                            <td>{email}</td>
                            <td onClick={()=>alert(`Password:${Password}`)}>
                                <b>******</b>
                            </td>
                            <td>{dob}</td>
                            <td>{new Date().getFullYear()-dob.slice(0,4)}</td>
                            <td>{place}</td>
                            <td>
                                <button onClick={()=>handleDelete(id,username)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
   </div>
   
   
   
   </>
  )
}

export default ResgisteredUsers
