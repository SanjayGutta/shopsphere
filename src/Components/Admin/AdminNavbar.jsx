import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminNavbar = () => {
  return (
   <>
   <ul>
                <li><NavLink to="/adminportal/">Home</NavLink></li>
                <li><NavLink to="/adminportal/products">Products</NavLink></li>
                <li><NavLink to="/adminportal/addproduct">Add Products</NavLink></li>
                <li><NavLink to="/adminportal/register">Users</NavLink></li>
                <li><NavLink to="/">Logout</NavLink></li>
            </ul>
   </>
  )
}

export default AdminNavbar
