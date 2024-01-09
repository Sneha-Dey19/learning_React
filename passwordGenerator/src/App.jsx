import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword]=useState("")
  //useref hook
  const passwordRef=useRef(null)

  const coppied= useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str +="1234567890"
    if(charAllowed) str += "!@#$%^&*()_+{}:"
    for(let i=1 ; i<=length ; i++){
      let char = Math.random()*str.length+1
      pass +=str.charAt(char)
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className=' my-3 text-xl text-center text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='password' readonly ref={passwordRef}></input>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={coppied}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={20} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}></input>
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} id="numberInput" onChange={()=>{
              setNumAllowed((prev)=>!prev);
            }}></input>
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id="numberInput" onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }}></input>
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
