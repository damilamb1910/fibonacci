import React, { useEffect } from 'react' 
import './servicios.css'
import Acordeon from '../acordeon/Acordeon'
import logo from "../../assets/img/logo.png"
import AOS from 'aos';
import 'aos/dist/aos.css';



const Servicios = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duración de la animación en milisegundos
      once: true, // Si la animación solo debe ocurrir una vez
    });
  }, []);
  return (
    <section className='servicios'>
<div className='slogan__servicios'>
    <div className='slogan__servicios__head'>
    <h4 data-aos="fade-up">CÓMO PODEMOS</h4>
    <div data-aos="fade-left" className='graphic1'>
    <img  src={logo} alt="" />
    </div>
    
    
    </div>

<h4 data-aos="fade-down" className='text__special'>POTENCIAR TU IDEA</h4>
</div>
     <Acordeon/> 
      
     
      
    
    </section>
    
  )
}

export default Servicios
