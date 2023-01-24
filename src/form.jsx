import React, { useState } from 'react'

function Form() {
    
    const [form, setForm] = useState({}, {
        name: "Dit navn",
        tel: "Din telefon",
        email: "Din email",
        comment: "Din kommentar",
        checkbox1: false,
        checkbox2: false
    })
    const updateForm = (event) => {
        setForm(previousState => {
          return { ...previousState, [event.target.name] : event.target.value, }
        });
      }
      
      const updateCheck1 = (event) => {
        
        setForm(previousState => {
            if (event.target.checked === true) {
              return { ...previousState, checkbox1: "du vil gerne modtage pr telefon", }  
            }else{
                return { ...previousState, checkbox1: "du vil ikke modtage pr telefon", }   
            }
          
        });
      }
      const updateCheck2 = (event) => {
        
        setForm(previousState => {
            if (event.target.checked === true) {
              return { ...previousState, checkbox2: "du vil gerne modtage pr email", }  
            }else{
                return { ...previousState, checkbox2: "du vil ikke modtage pr email", }   
            }
          
        });
      }

  return (
    <>
    <form action="">
        <input onChange={updateForm} type="text" name="name" id="" />
        <input onChange={updateForm} type="tel" name="tel" id="" />
        <input onChange={updateForm} type="email" name="email" id="" />
        <textarea onChange={updateForm} name="comment" id="" cols="30" rows="10"></textarea>
        <label htmlFor="contactViaPhone">contact via Phone</label>
        <input onClick={updateCheck1} type="checkbox" name="contactViaPhone" value={1234} id="" />
        <label htmlFor="contactViaEmail">contact via Email</label>
        <input onClick={updateCheck2} type="checkbox" name="contactViaEmail" id="" />
    </form>
    <p>
{form.name}
<br />
{form.tel}
<br />
{form.email}
<br />
{form.comment}
<br />
{form.checkbox1}
<br />
{form.checkbox2}
    </p>
    </>
  )
}

export default Form