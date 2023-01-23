import React, { useState } from 'react'

function Hilsen() {
    const [greeting, setGreeting] = useState("")
    const HandleChange = (event) => {
        setGreeting(event.target.value)
    }
  return (
    <>
    <h1>hej, {greeting}</h1>
    <input onChange={HandleChange} type="text" />
    </>
  )
}

export default Hilsen