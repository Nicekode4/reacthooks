import React, { useState } from 'react'

function Hilsen2() {
const [hilsen, setHilsen] = useState("")
const updateHilsen = e => {
    setHilsen (e.target.value)
    }


  return (
    <>
    <h1>Hej, {hilsen}</h1>
    <input type="text" name='hilsen' id='hilsen' onChange={updateHilsen} />
    </>
  )
  }

export default Hilsen2