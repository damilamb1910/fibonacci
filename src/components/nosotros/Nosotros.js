import React, { useEffect } from 'react'
import './nosotros.css'
import cami from "../../assets/img/camila.png"
import dami from "../../assets/img/damian.png"
import gaston from "../../assets/img/gaston.png"
import elian from "../../assets/img/elian.png"
import AOS from 'aos';
import 'aos/dist/aos.css';




const Nosotros = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      once: true, // Si la animación solo debe ocurrir una vez
    });
  }, []);
  return (
    <section className='nosotros'>
<div className='slogan__nosotros'>
    <div className='slogan__nosotros__head'>
    <h4 data-aos="fade-up">SOBRE</h4><h4 data-aos="fade-down" className='text__special'>NOSOTROS</h4>
    </div>


</div>
     <div className='nosotros__body'>
        <p data-aos="fade-up">Así como la secuencia de Fibonacci revela patrones perfectos en la naturaleza, en Grupo Fibonacci aplicamos  patrones estratégicos para  <span>convertir tus metas de facturación en resultados impactantes y precisos.</span>
        </p>
        <p data-aos="fade-up">Nuestro equipo está formado por profesionales de diversas áreas, lo que nos permite <span>abordar cada desafío desde múltiples perspectivas</span>. Ofrecemos estrategias innovadoras y personalizadas que se alinean con tus metas de negocio y buscamos siempre superar tus expectativas.</p>
       <p>Confía en Grupo Fibonacci para <span>impulsar tu crecimiento y maximizar tus resultados</span>.
       </p>
        </div> 
     <div className='card__container__nosotros'>
        <div data-aos="fade-left" className='card__nosotros'>
            <img src={gaston} alt="" />
            <h5>Gastón</h5>
            <h6>🟠Ower- Team Leader Performance
            </h6>
            </div>
            <div  data-aos="fade-left" className='card__nosotros'>
            <img src={cami} alt="" />
            <h5>Camila</h5>
            <h6>🟠Ower-Account Manager</h6>
            </div>
            <div data-aos="fade-left" className='card__nosotros'>
            <img src={dami} alt="" />
            <h5>Damián</h5>
            <h6>🟠Developer</h6>
            </div>
            <div data-aos="fade-left" className='card__nosotros'>
            <img src={elian} alt="" />
            <h5>Elián</h5>
            <h6>🟠Content Creator</h6>
            </div>

     </div>
      
    
    </section>
    
  )
}

export default Nosotros
