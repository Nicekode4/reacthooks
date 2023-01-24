import React, { useState } from 'react'

function Form2() {
const [form, setForm] = useState({}, {
name: "...",
email: "...",
tel: "...",
comment: "...",
telAccept: false,
emailAccept: false
})

const updateForm = (e) => {
    setForm(prevState => {
        return { ...prevState, [e.target.name] : e.target.value, }
    })
}
const updateCheck = (e) => {
    setForm(prevState => {
        return { ...prevState, [e.target.name] : e.target.checked, }
    })
}
  return (
    <>
    <input type="text" name='name' id='name' onChange={updateForm} />
    <input type="tel" name='tel' id='tel' onChange={updateForm}/>
    <input type="email" name='email' id='email' onChange={updateForm}/>
    <textarea name="comment" id="comment" cols="30" rows="10" onChange={updateForm}></textarea>
    <input type="checkbox" name="telAccept" id="telAccept" onChange={updateCheck}/>
    <input type="checkbox" name="emailAccept" id="emailAccept" onChange={updateCheck}/>
    <section>
        <ul>
            <li>Name: {form.name}</li>
            <li>Number: {form.tel}</li>
            <li>Email: {form.email}</li>
            <li>Comment: {form.comment}</li>
            <li>Accept offer on phone: {form.telAccept ? "Jeps" : "Nope"}</li>
            <li>Accept offer on email: {form.emailAccept ? "Jeps" : "Nope"}</li>
        </ul>
    </section>
    </>
  )
}

export default Form2