import React from 'react'
import Image from 'next/image'
import style from './CatCard.module.css'
import Link from 'next/Link'

export default function AnimalCard( {animal}) {
    console.log(animal)
    return (
        <Link href={`browse/${animal.id}`}>
        <div className={style.container}>
            <Image src= {animal.img} width={200} height={200}/>
            <p className="animal-name"> {animal.name} </p>
            <p> {animal.species} </p>
        </div>
        </Link>
    )
}
