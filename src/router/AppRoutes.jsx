import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from '../components/common/Login'
import { Signup } from '../components/common/Signup'
import { UserNavbar } from '../components/user/UserNavbar'

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
      
    }
  ])

export const AppRoutes = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
