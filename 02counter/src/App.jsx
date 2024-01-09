import { useState } from 'react'
import './App.css'
import Card from './components/card'
function App() {
  let [count, setCount] = useState(0)
  const addval =()=>{
    //count=count+1;
    setCount(count+1)
  }
  const removeval=()=>{
    if(count==0){
      alert("value is 0")
    } else{ 
    //count=count-1;
    setCount(count-1)
    }
  }
  return (
    <>
      <h1 className= 'bg-green-400 text-3xl rounded-xl '>INCREMENT / DECREMENT</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick = {addval}>Add</button>
      <br/>
      <button onClick = {removeval}>Remove</button>
      <br/>
      <Card username="Sneha" visit="click me"/>
      <br/>
      <Card username="Shreya" />
    </>
  )
}

export default App
