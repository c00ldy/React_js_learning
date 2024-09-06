import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvide } from './Contexts/Theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
  const [thememode, setThememode] = useState("light")

  const lighttheme = () => {
    setThememode("light")
  }


  const darktheme = () => {
    setThememode("dark")
  }

  //actually change in color 

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(thememode)

  }, [thememode])

  return (

    <ThemeProvide value={{ darktheme, thememode, lighttheme }} >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvide>

  )
}

export default App
