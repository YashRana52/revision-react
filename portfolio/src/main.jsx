import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './User/User'
import Github from './components/Github'
import Signup from './components/Signup'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },

//       {
//         path: '/about',
//         element: <About />
//       },
//       {
//         path: '/contact',
//         element: <Contact />
//       },

//     ]
//   }

// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signup" element={<Signup />} />

      <Route path='/' element={<Layout />}>

        <Route path='' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='user/:userid' element={<User />} />
        <Route path='/github' element={<Github />} />

      </Route>
    </>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />


  </StrictMode>
)
