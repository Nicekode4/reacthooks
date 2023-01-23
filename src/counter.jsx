import React, { useState } from 'react'
let counting = 0;
function Counter() {
    const [count, setCounter] = useState(counting)
  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => setCounter(counting++)}>+ 1</button>
    </>
  )
}

export default Counter