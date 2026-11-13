import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminLogin = () => {
    let navigate=useNavigate()
    let [formData,setFormData]=useState({email:" ",password:" "})
    let handleInput=(e)=>{
        let key=e.target.name
        let val=e.target.value
        setFormData({
            ...formData,
            [key] : val
        })
    }
    let handleSubmit=(e)=>{
        e.preventDefault()
        let errBroder=`border:solid 2px red;color:red;background:white`
        let successBorder=`border:solid 2px green;color:green;background:white`
       let {email,password}=formData

       let creditials={
        adminEmail:"sanjay0307@gmail.com",
        adminPswd:"Sanju0207"
       }
       let {adminEmail,adminPswd}=creditials
       if(email === adminEmail)
       {
        e.target[0].style.cssText=successBorder
        if(password === adminPswd)
        {
            e.target[1].style.cssText=successBorder  
            toast.success("Login Success")
            navigate('/adminportal')  
        }
        else
        {
            e.target[1].style.cssText=errBroder
            toast.error("Password is Invalid")
        }
       }
       else
       {
          e.target[0].style.cssText=errBroder 
          toast.error("Email is Invalid")
       }
        
    }
    return (
        <>
            <div className="admin-login">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder='Enter Your E-mail Address'
                        onChange={handleInput}
                        name='email'
                    />
                    <input
                        type="password"
                        placeholder='Enter Your Password'
                        onChange={handleInput}
                        name='password'
                    />

                    <button>
                        Admin Login
                    </button>
                </form>
            </div>

        </>
    )
}

export default AdminLogin
