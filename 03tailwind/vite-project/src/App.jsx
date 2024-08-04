import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name: "dhruval",
    age: "18",
  }

  let newArr= [1,2,3,4];
  return (
    <>
      <h1 className='bg-green-500  text-black p-4 rounded-xl mb-4' >dhruval</h1>
      <Card username="dhruval" nuton="clickme" />
      <Card username="kushal" nuton="hereme" />

    </>
  )
}

export default App
