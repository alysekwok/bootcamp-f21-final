import React from 'react'
import Image from 'next/image'
import style from './ApplicationCard.module.css'
import Link from 'next/Link'
import ViewMoreCard from '../ViewMoreCard/ViewMoreCard'

export default function ApplicationCard( {app} ) {
    console.log(app)
    async function submitHandler(e) {
        return {
            props: {app}
        }
    }
    return (
        <div className={style.container}>
            <p className="app-name">Name: {app.name} </p>
            <p>Phone: {app.phone} </p>
            <p>Email: {app.email} </p>
            <p>Location: {app.location} </p>
            <button onSubmit = {submitHandler}>View More</button>
        </div>
    )
}