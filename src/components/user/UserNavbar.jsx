import React from 'react'
import { Outlet } from 'react-router-dom'

export const UserNavbar = () => {
  return (
    <div>
        <h1>UserNavbar</h1>
        <Outlet/>
    </div>
  )
}
