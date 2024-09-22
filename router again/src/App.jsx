import './App.css'
import Navbar from './Components/Header/Navbar'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './Components/Main/Home'
import About from './Components/Main/About'
import Blog from './Components/Main/Blog'
import Footer from './Components/Footer/Footer'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /><Footer/></>
    },
    {
      path: "/about",
      element:<> <Navbar /><About /><Footer/></>
    },
    {
      path: "/Blog",
      element:<> <Navbar /><Blog /><Footer/></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
