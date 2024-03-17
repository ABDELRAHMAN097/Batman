import React from 'react'
import './index.scss'
import { useState } from 'react';

export default function LeftSide(props) {
  let [name , setname] = useState('saloma')
  let [age , setage] = useState(20)
  let [jop , setjop] = useState('employment')
  return (
    <div className='col-12 leftSite'>
        <h2>hello {name}</h2>
        <button
        onClick={()=>{
          setname('salma')
        }}
        >
          change name
        </button>
        {/* //jjjh */}
        <p>age : {age}</p>
        <button
        onClick={()=>{
          setage(age++)
        }}
        >
          change age
        </button>
        {/*  */}
        <span>{jop}</span>
        <button
        onClick={()=>{
          setjop('nurse')
        }}
        >
          change jop
        </button>
    </div>
  )
}
