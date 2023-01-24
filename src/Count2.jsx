import React, { useState } from 'react'
let num = 0
function Count2() {
    
    const [number, setNumber] = useState(0)
    const updateNumber = () => {
         setNumber(num++)
    }

  return (
    <>
    <h1>{number}</h1>
    <button onClick={updateNumber}>+1</button>
    </>
  )
}

export default Count2