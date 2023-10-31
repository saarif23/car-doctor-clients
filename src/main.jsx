import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.jsx'
import AuthProvider from './Provider/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' bg-white text-slate-900 dark:text-white dark:bg-slate-700'>
    <div className='max-w-6xl mx-auto'>
      <React.StrictMode>
        <AuthProvider>
          <RouterProvider router={Router}></RouterProvider>
        </AuthProvider>
      </React.StrictMode>
    </div>
  </div>
)
