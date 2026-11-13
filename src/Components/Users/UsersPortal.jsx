
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import ViewMore from '../Pages/ViewMore'
import Navbar from '../Navbar'
import Cartitems from '../Pages/Cartitems'

const UsersPortal = () => {
  return (
    <>
      <div className="users-portal">
        <Navbar />

        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Products />} path='/products' />
          <Route element={<ViewMore />} path='/viewmore/:id' />
          <Route element={<Cartitems />} path='/cartitems' />
        </Routes>
      </div>
    </>
  )
}

export default UsersPortal
