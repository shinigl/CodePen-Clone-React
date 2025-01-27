import React from 'react'
import Home from './components/Home'
import {createBrowserRouter} from 'react-router-dom'
import Login from './SignUp/Login'
import { RouterProvider } from 'react-router-dom'
import Chatbot from './components/Chatbot'

function App() {
  
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path: '/ask-ai',
    element : <Chatbot/>
  }
])
  return (
    <>
    <RouterProvider router = {router}/>
    </>
  )
}

export default App
