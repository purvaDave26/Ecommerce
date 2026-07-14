import React from 'react'
import { Outlet } from 'react-router-dom'

export const AdminSidebar = () => {
  return (
    <div>
        <h1>AdminSidebar</h1>
        {/* child componant load */}
        <Outlet></Outlet>
    </div>
  )
}
