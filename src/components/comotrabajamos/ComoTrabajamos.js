import React from 'react'
import "./comoTrabajamos.css"
import sticker3 from "../../assets/img/sticker3.png"
import Acordeon2 from '../acordeon2/Acordeon2'

const ComoTrabajamos = () => {
  return (
   <section className='comoTrabajamos'>
<div className='slogan__comoTrabajamos'>
    <div className='slogan__comoTrabajamos__head'>
    <h4>COMO LOGRAMOS</h4><img src={sticker3} alt="" />
    </div>

<h4 className='text__special'>RESULTADOS</h4>
</div>
      <Acordeon2/>
   </section>
  )
}

export default ComoTrabajamos
