import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  }
], {
  basename: import.meta.env.BASE_URL
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)