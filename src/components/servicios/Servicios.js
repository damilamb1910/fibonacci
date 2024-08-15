import React from 'react'
import './servicios.css'
import sticker1 from "../../assets/img/sticker2.png"
import Acordeon from '../acordeon/Acordeon'



const Servicios = () => {
  return (
    <section className='servicios'>
<div className='slogan__servicios'>
    <div className='slogan__servicios__head'>
    <h4>COMO PODEMOS</h4><img src={sticker1} alt="" />
    </div>

<h4 className='text__special'>POTENCIAR TU IDEA</h4>
</div>
     <Acordeon/> 
      
     
      
    
    </section>
    
  )
}

export default Servicios
