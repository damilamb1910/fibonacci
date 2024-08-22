import React from 'react'
import './servicios.css'
import Acordeon from '../acordeon/Acordeon'
import logo from "../../assets/img/logo.png"



const Servicios = () => {
  return (
    <section className='servicios'>
<div className='slogan__servicios'>
    <div className='slogan__servicios__head'>
    <h4>COMO PODEMOS</h4>
    <div className='graphic1'>
    <img src={logo} alt="" />
    </div>
    
    
    </div>

<h4 className='text__special'>POTENCIAR TU IDEA</h4>
</div>
     <Acordeon/> 
      
     
      
    
    </section>
    
  )
}

export default Servicios
