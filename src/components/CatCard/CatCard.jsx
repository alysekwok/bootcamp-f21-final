import React from 'react'
import Image from 'next/image'
import style from './CatCard.module.css'
import Link from 'next/Link'

export default function CatCard( {cat} ) {
    console.log(cat)
<<<<<<< HEAD
    if(cat.isAdopted == true) {
        return
    }
    return (
            <Link href={`adopt/${cat.name}`}>
=======
    if(cat.isAdopted == false) {

     return (
            <Link href={`adopt/${cat._id}`}>
>>>>>>> 0a927218a70f3832df8532a2cb2232d36c2653a0
            <div className={style.container}>
                <Image src={cat.image} width={200} height={200}/>
                <p className="animal-name"> {cat.name} </p>
                <p> {cat.breed} </p>
            </div>
            </Link>
    )
     }
    else {
        return (
           
            <div className={style.containers}>
                <Image src= {cat.image} width={200} height={200}/>
                <p className="animal-name"> {cat.name} </p>
                <p className="animal-name"> <b>Adopted </b></p>
                
            </div>
            
        )
    }
    }