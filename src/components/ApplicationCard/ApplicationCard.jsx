import React from 'react'
import Image from 'next/image'
import style from './ApplicationCard.module.css'
import Link from 'next/Link'

export default function ApplicationCard( {app} ) {

    console.log(app)
    return (
        <div className={style.container}>
            <p className="app-name">Name: {app.name} </p>
            <p>Phone: {app.phone} </p>
            <p>Email: {app.email} </p>
            <p>Location: {app.location} </p>
            <button onClick={}>View More</button>
        </div>
    )
}
