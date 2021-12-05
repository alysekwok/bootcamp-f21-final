import React from 'react'
import Link from 'next/link'
import style from './CatCard.module.css'
import Image from 'next/image'

export default function CatCard({bart}) {
    console.log(bart)
    return(
        <Link href={`/app/${bart.id}`}>
         <div className={style.container}>
            
            <p> {bart.name}</p>
            <p>{bart.location}</p>
         </div>
         </Link>
    
    )
}