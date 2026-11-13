import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import AdminNavbar from './Admin/AdminNavbar'
import UsersNavbar from './Users/UsersNavbar'
import img from "../assets/logo1.png"

const Navbar = () => {
  //uselocation is a hook which is prsent in react router dom ,it is used to target the location/path of the component& returns the location Object
  const location = useLocation()
  let path = location.pathname
  let bool = path.startsWith("/adminportal")
  console.log(bool);


  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={img} alt="" />
        </div>
        <div className="links">
          {bool ?
            <AdminNavbar></AdminNavbar>
            :
            <UsersNavbar></UsersNavbar>
          }
        </div>
      </div>

    </>
  )
}

export default Navbar
