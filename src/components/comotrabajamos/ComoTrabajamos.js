import React, { useEffect } from 'react'
import "./comoTrabajamos.css"
import sticker3 from "../../assets/img/17.png"
import Acordeon2 from '../acordeon2/Acordeon2'
import AOS from 'aos';
import 'aos/dist/aos.css';



const ComoTrabajamos = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duración de la animación en milisegundos
      once: true, // Si la animación solo debe ocurrir una vez
    });
  }, []);
  return (
   <section className='comoTrabajamos'>
<div className='slogan__comoTrabajamos'>
    <div className='slogan__comoTrabajamos__head'>
    <h4 data-aos="fade-up">CÓMO LOGRAMOS</h4><img data-aos="fade-left" src={sticker3} alt="" />
    </div>

<h4 data-aos="fade-down" className='text__special'>RESULTADOS</h4>
</div>

     <Acordeon2/>
      
   </section>
  )
}

export default ComoTrabajamos
