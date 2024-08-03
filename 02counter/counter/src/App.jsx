import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setcounter ] = useState(15);

  const addvalue = () => {
    setcounter(counter + 1)
  }

  const removevalue = ()=>{
    setcounter(counter - 1)
  }
  return (
    <>
      <h1>dhruval</h1>
      <h2>counter value {counter}</h2>

      <button onClick={addvalue} >add value {counter}</button>
      <br />
      <br />
      <button onClick={removevalue}>remove value{counter}</button>
    </>
  )
}

export default App
