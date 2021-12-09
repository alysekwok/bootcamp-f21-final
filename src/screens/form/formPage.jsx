import Image from 'next/image'
import style from "./FormPage.module.css";
import React, {useState} from 'react'
import { padEnd } from 'lodash';

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
      if(email.match(/\S+@\S+\.\S+/) == null) {
        alert("Must be valid email address")
        return;
      }
      let doc1 = {
        name: name,
        location: location,
        email: email,
        phone: phone,
        id: cat._id,
        isApproved: false,
      }
      try {
        /*
        * tried saving Adoption doc with mongoose save but couldn't figure it out
        *
        doc1.save(function(err, doc) {
          if (err) return console.error(err);
          console.log("Document inserted successfully");
        });
        */

        /*this errors as "Failed to load resource: the server responded with a status of 500 (Internal Server Error)" */
        const res = await fetch('http://localhost:3000/api/adopt/form', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(doc1)
        })
        const content = await res.json();
        console.log(content)
        alert("Application was successfully submitted")
      } catch (e) {
        alert("Error!")
      }
    }

        



    

    return (
      <div>
        <div className={style.catcontainer} style={{ 
        backgroundImage: `url(/image/cloud.gif)` ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        width: `100%`
        }}>
          <div className={style.catImage}>
          <Image src= {cat.image} width={200} height={200}/>
          </div>
          <div className= {style.container}>
          <p> Name: {cat.name} </p>
          <p> Age: {cat.age} </p>
          <p> Location: {cat.location} </p>
          <p> Breed: {cat.breed} </p>
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