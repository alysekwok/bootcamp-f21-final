import style from "./AdoptPage.module.css";
import React, {useState} from 'react'
export default function AdoptPage() {
    const [name,setname]=useState('')
    const [Email,setEmail]=useState('')
    const [phone,setphone]=useState('')
    const [location,setlocation]=useState('')

    async function submitHandler(e){
      e.preventDefault()
      console.log(phone)
      if(phone.match(/^[0-9]+$/) == null) {
        alert("Phone can only contain digits")
        return;
      }
      if(Email.match(/\S+@\S+\.\S+/) == null) {
        alert("Must be valid email address")
        return;
      }
      try {
        const res=await fetch('http://localhost:27017/adopt/cats',{
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
        alert("Application was successfully submitted")
      } catch (e) {
        alert("Error!")
      }
      
    }

        



    

    return (
      <div className={style.backgroundpattern} style={{ 
        backgroundImage: `url(image/cloud.gif)` ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center'
      }}>
        <div className={style.formcontainer}>
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
      </div>
    )
  }