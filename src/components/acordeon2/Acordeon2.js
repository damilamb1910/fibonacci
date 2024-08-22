import React, { useState } from 'react'
import './acordeon2.css'
import elementoGrafico5 from "../../assets/img/5.png"
import elementoGrafico6 from "../../assets/img/6.png"
import elementoGrafico7 from "../../assets/img/7.png"

const Acordeon2 = () => {
    const [selected, setSelected]=useState(null)
    const toggle=(i)=>{
        if (selected == i){
            return setSelected(null)
        }
        setSelected(i)
    }
    const data =[
        {
            titulo: 'Análisis Inicial',
            contenido: "Evaluamos tu negocio y tu mercado para identificar oportunidades y áreas de mejora.",
            elementoGrafico:elementoGrafico5

        },{
            titulo: 'Estudio de Mercado',
            contenido: "Realizamos un estudio detallado para entender tendencias, audiencia y competencia.",
            elementoGrafico:elementoGrafico6
        },{
            titulo: 'Definición de Objetivos',
            contenido: "Establecemos metas claras y alcanzables en colaboración contigo.",
            elementoGrafico:elementoGrafico7
        },{
            titulo: 'Desarrollo de Estrategia',
            contenido: "Creamos una estrategia de marketing digital personalizada basada en nuestros hallazgos.",
            elementoGrafico:elementoGrafico5
        },{
            titulo: 'Ejecución y Monitoreo',
            contenido: "Implementamos la estrategia y supervisamos el desempeño continuamente.",
            elementoGrafico:elementoGrafico6
        },{
            titulo: 'Optimización Continua',
            contenido: "Ajustamos y optimizamos las tácticas según los resultados y datos obtenidos.",
            elementoGrafico:elementoGrafico7
        },{
            titulo: 'Informe y Revisión',
            contenido: "Proporcionamos informes detallados y revisamos los resultados para planificar futuros pasos.",
            elementoGrafico:elementoGrafico5
        }
        ,{
            titulo: 'Estrategia a Largo Plazo',
            contenido: "Desarrollamos una estrategia sostenible para asegurar el crecimiento continuo.",
            elementoGrafico:elementoGrafico6
        }
    ]
  return (
    <div className='wrapper'>
        
        <div className='acordeon2'>
{data.map((item,i)=>(
    <div className='item__acordeon2'>
<div className='titulo__item__acordeon2' onClick={()=> toggle(i)}>
    <img src={item.elementoGrafico} alt="" />
<h3>{item.titulo}</h3>

{selected===i ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FF6F00" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FF6F00" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
</svg> }



</div>
<div className={selected===i?'contenido__acordeon2__show':'contenido__acordeon2'}>

<div className={selected===i?'item__contenido__acordeon2_show':'item__contenido__acordeon2'}>

    <p>{item.contenido}</p>
</div>
</div>
        </div>
))}
        </div>
      
    </div>
  )
}

export default Acordeon2
