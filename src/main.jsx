import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />,
  },
  {
    path:'sneakers',
    element:<Products />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
