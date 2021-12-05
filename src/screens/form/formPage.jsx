import Image from 'next/image'
import style from "./FormPage.module.css";
import React, {useState} from 'react'
export default function FormPage( {cat} ) {
    const [name,setname]=useState('')
    const [email,setEmail]=useState('')
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
        const res=await fetch('http://localhost:3001/users',{
            method:'POST', 
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name:name,
                email:email,
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
        <div>
          <Image src= {cat.image} width={200} height={200}/>
          <div className= {style.container}>
          <p> {cat.name} </p>
          <p> {cat.age} </p>
          <p> {cat.location} </p>
          <p> {cat.breed} </p>
          <p>Description: This is a cat.</p>
        </div>
      </div>
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