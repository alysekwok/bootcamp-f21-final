import style from "./FormPage.module.css";
import React, {useState} from 'react'
export default function FormPage() {
    const [name,setname]=useState('')
    const [Email,setEmail]=useState('')
    const [phone,setphone]=useState('')
    const [location,setlocation]=useState('')

    async function submitHandler(e){
      e.preventDefault()
      console.log(phone)
      if(phone.match(/^[0-9]+$/) == null) {
        alert("can only contain digits")
      }
      if(Email.match(/\S+@\S+\.\S+/) == null) {
        alert("must be valid email address")
      }
      try {
        const res=await fetch('http://localhost:3000/ssr',{
            method:'POST', 
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name:name,
                Email:Email,
                phone:phone,
                location:location,
            })
        })
      } catch (e) {
        alert("Error!")
      }
      
    }

        



    

    return (
      <div style={{ 
        backgroundImage: `url(image/cloud.gif)` ,
        backgroundRepeat: 'no-repeat',
        
      }}>
  
        <form onSubmit={submitHandler}>
           <h1 className={style.title}><center>~Register For An Animal~</center></h1>
           <center><label className={style.txt} htmlFor="name">
           Name</label>
           <input className={style.enter} required='true'type="text" onChange={e=>setname(e.target.value)}/></center>
           <center><label className={style.txt}htmlFor="species">
           Email</label>
           <input className={style.enter}required='true'type="text" onChange={e=>setEmail(e.target.value)}/></center>
           <center><label className={style.txt}htmlFor="description">
           Phone#</label>
           <input className={style.enter} required='true'type="text" onChange={e=>setphone(e.target.value)}/></center>
           <center><label className={style.txt}htmlFor="location">
           Location</label>
           <input className={style.enter} required='true' type="text" onChange={e=>setlocation(e.target.value)}/></center>
           
           <center><button className={style.enter}className={style.submit}type="submit">submit</button></center>
           
         </form>
      
      </div>
    )
  }
