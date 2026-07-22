import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from '../components/common/Login'
import { Signup } from '../components/common/Signup'
import { UserNavbar } from '../components/user/UserNavbar'
import { AdminSidebar } from '../components/admin/AdminSidebar'
import { UserOrders } from '../components/user/UserOrders'
import ProtectedRoutes from '../components/common/ProtectedRoutes'
import { Cart } from '../components/user/Cart'
import { UserList } from '../components/admin/UserList'
import { Shop } from '../components/user/Shop'
import { Wallet } from '../components/user/Wallet'

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
          element:
          <ProtectedRoutes roles={["user"]}>
          <UserOrders/>
          </ProtectedRoutes>
        },
        {
          path:"shop",
          element:<Shop/>
        },
        {
          path:"cart",
          element:<Cart/>
        },
        {
          path:"wallet",
          element:<Wallet/>
        }
      ]
    },
    {
      path:"/admin",
      element:<AdminSidebar/>,
      children:[
        {
          path:"userlist",
          element:
          <ProtectedRoutes roles={["admin"]}>
            <UserList/>
            </ProtectedRoutes>
        }
      ]
    }
  ])

export const AppRoutes = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
