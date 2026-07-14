import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from '../components/common/Login'
import { Signup } from '../components/common/Signup'
import { UserNavbar } from '../components/user/UserNavbar'
import { AdminSidebar } from '../components/admin/AdminSidebar'
import { UserOrders } from '../components/user/UserOrders'

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/user",
      element:<UserNavbar/>,
      children:[
        {
          path:"orders",
          element:<UserOrders/>
        }
      ]
    },
    {
      path:"/admin",
      element:<AdminSidebar/>,
      children:[
        {
          path:"userlist",
          element:<userList/>
        }
      ]
    }
  ])

export const AppRoutes = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
