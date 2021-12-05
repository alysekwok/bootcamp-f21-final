import React from 'react'
import style from './AdoptPage.module.css'
import CatCard from '../../components/CatCard/CatCard'

export default function Adoptpage( {bart} ) {
console.log(bart)
  return (
    <div className={style.container}>
      <h1> Browse Shelter Animals </h1>
      <div className={style.list}>
        {
          bart.map(element=>{
            return <CatCard bart={element}></CatCard>
          }
          )
        }
      </div>
    </div>
  )
  }