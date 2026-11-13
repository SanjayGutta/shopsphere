
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UsersNavbar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('userLogin')
    toast.success("Logout Successfully")
    navigate('/', { replace: true })
  }

  return (
    <ul>
      <li><NavLink to="/usersportal">Home</NavLink></li>
      <li><NavLink to="/usersportal/products">Products</NavLink></li>
      <li><NavLink to="/usersportal/cartitems">Cart</NavLink></li>
      <li>
        <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
      </li>
    </ul>
  )
}

export default UsersNavbar
