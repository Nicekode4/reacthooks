import React, { useState } from 'react'

function NewForm() {
    const [form, setForm] = useState({}, {
        firstName: "Firstnale",
        lastName: "Lastname",
        gender: "...",
        checkbox: false
    })

    const updateForm = (event) => {
        setForm(previousState => {
          return { ...previousState, [event.target.name] : event.target.value, }
        });
      }

      const updateCheck = (event) => {
        setForm(previousState => {
          return { ...previousState, [event.target.name] : event.target.checked, }
        });
      }

  return (
    <>
    <input type="text" name='firstname' id='firstname' onChange={updateForm} />
    <h1>{form.firstname}</h1>
    <input type="text" name='lastname' id='lastname' onChange={updateForm} />
    <h1>{form.lastname}</h1>
    <select name="gender" id="gender" onChange={updateForm}>
        <option value="Male">Male</option>
        <option value="female">female</option>
    </select>
    <h1>{form.gender}</h1>
    <input type="checkbox" name="GDPR" id="GDPR" onChange={updateCheck} />
    <h1>{form.GDPR ? "Ja" : "Nej"}</h1>
    </>
  )
}

export default NewForm