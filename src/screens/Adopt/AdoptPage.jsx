import style from "./AdoptPage.module.css";
import CatCard from "../../components/CatCard/CatCard";
import React, {useState} from 'react'
export default function AdoptPage( {cats} ) {
  console.log(cats)
  return (
    <div className={style.container}>
      <h1> Browse Shelter Cats</h1>
      <div className={style.list}>
        {
          cats && cats.map(cat => <CatCard cat = {cat} key = {cat.id}/>)
        }
      </div>
    </div>
  )
}
