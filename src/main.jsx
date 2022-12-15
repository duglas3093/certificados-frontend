import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Admin } from './layouts/Admin'
import { Index } from './pages/Index'
import { Login } from './pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/admin/dashboard',
    element: <Admin/>,
  },
  // {
  //   path: '/admin',
  //   element: <Admin/>,
  // },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
)
