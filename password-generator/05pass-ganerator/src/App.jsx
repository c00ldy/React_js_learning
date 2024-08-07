import { useCallback, useEffect, useState, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllowed] = useState(false)
  const [charAllow, serCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllow) str += "1234567890"
    if (charAllow) str += "@%#^$&!*()&$~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllow, charAllow, setPassword])

  const copypasswordtoclipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordgenerator();
  }, [length, numberAllow, charAllow, passwordgenerator])

  const passwordRef = useRef(null);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700' >
        <div className='text-white text-center'> password generator</div>
        <div className='flex shadow rounded-lg overflow-hidden mb-4' ></div>
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          ref={passwordRef}
        />
        <button onClick={copypasswordtoclipboard} className='outline-none bg-blue-500 text-white px-3 py-05 shrink-0' > copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1' >
          <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }} />
          <label >length : {length}</label>
        </div>
        <div className='flex  items-center gap-x-1' >
          <input type="checkbox"
            defaultChecked={numberAllow}
            id='numberinput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="numberinput">number</label>
        </div>

        <div className='flex  items-center gap-x-1' >
          <input type="checkbox"
            defaultChecked={numberAllow}
            id='characterinput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="characterinput">character</label>
        </div>

      </div>
    </>
  )
}

export default App
