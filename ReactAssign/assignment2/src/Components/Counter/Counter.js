import React, { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)
  const increaseCount = () => {
    setCount((count) => count + 1)
  }
  const decreaseCount = () => {
    if(count <= 0){
      return
    }
    setCount((count) => count - 1)
  }
  return (
    <div className='counter'>
      <h1>Counter</h1>
      <p>{count}</p>
      <br/>
      <div className='button-group'>
      <button className='counter-button' onClick={increaseCount}>Increment</button>
      <button className='counter-button' onClick={decreaseCount}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter
