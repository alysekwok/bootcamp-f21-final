import React from 'react'
import Image from 'next/image'
import style from './ViewMoreCard.module.css'
import Link from 'next/Link'

export default function ViewMoreCard( {app} ) {
    console.log(app)
    return (
        <Link href={`admin/${app.id}`}>
        <div className={style.container}>
            <p className="app-name">Name: {app.name} </p>
            <p>Phone: {app.phone} </p>
            <p>Email: {app.email} </p>
            <p>Location: {app.location} </p>
            <button>Approve</button>
        </div>
        </Link>
    )
}