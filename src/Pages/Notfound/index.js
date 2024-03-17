import React from 'react'
import './index.scss'
import photo from '../../assets/istockphoto-1975039489-170667a.webp'
export default function Notfound() {
  return (
    <div className='Notfound col-12 d-flex justify-content-center align-items-center'>
         <img height= "100%" width="100%" src={photo} alt=''/>
    </div>
  )
}
