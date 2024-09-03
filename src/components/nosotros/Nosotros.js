import React from 'react'
import './nosotros.css'
import sticker1 from "../../assets/img/sticker2.png"
import cami from "../../assets/cami2.png"
import dami from "../../assets/damian1.png"
import gaston from "../../assets/img/gastonPhoto.png"
import elian from "../../assets/img/eliasphoto.png"




const Nosotros = () => {
  return (
    <section className='nosotros'>
<div className='slogan__nosotros'>
    <div className='slogan__nosotros__head'>
    <h4>SOBRE</h4><h4 className='text__special'>NOSOTROS</h4>
    </div>


</div>
     <div className='nosotros__body'>
        <p>Así como la secuencia de Fibonacci revela patrones perfectos en la naturaleza, en Grupo Fibonacci aplicamos  patrones estratégicos para  <span>convertir tus metas de facturación en resultados impactantes y precisos.</span>
        </p>
        <p>Nuestro equipo está formado por profesionales de diversas áreas, lo que nos permite <span>abordar cada desafío desde múltiples perspectivas</span>. Ofrecemos estrategias innovadoras y personalizadas que se alinean con tus metas de negocio y buscamos siempre superar tus expectativas.</p>
       <p>Confía en Grupo Fibonacci para <span>impulsar tu crecimiento y maximizar tus resultados</span>.
       </p>
        </div> 
     <div className='card__container__nosotros'>
        <div className='card__nosotros'>
            <img src={gaston} alt="" />
            <h5>Gastón</h5>
            <h6>🟠Ower- Team Leader Performance
            </h6>
            </div>
            <div className='card__nosotros'>
            <img src={cami} alt="" />
            <h5>Camila</h5>
            <h6>🟠Ower-Account Manager</h6>
            </div>
            <div className='card__nosotros'>
            <img src={dami} alt="" />
            <h5>Damián</h5>
            <h6>🟠Developer</h6>
            </div>
            <div className='card__nosotros'>
            <img src={elian} alt="" />
            <h5>Elián</h5>
            <h6>🟠Content Creator</h6>
            </div>

     </div>
      
    
    </section>
    
  )
}

export default Nosotros
