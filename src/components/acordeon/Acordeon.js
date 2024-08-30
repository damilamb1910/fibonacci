import React, { useState } from 'react'
import './acordeon.css'
import elementoGrafico2 from "../../assets/img/2.png"
import elementoGrafico3 from "../../assets/img/3.png"
import elementoGrafico8 from "../../assets/img/8.png"
import elementoGrafico9 from "../../assets/img/9.png"
import elementoGrafico11 from "../../assets/img/11.png"
import elementoGrafico12 from "../../assets/img/12.png"
import elementoGrafico13 from "../../assets/img/13.png"


const Acordeon = () => {
    const [selected, setSelected]=useState(null)
    const toggle=(i)=>{
        if (selected == i){
            return setSelected(null)
        }
        setSelected(i)
    }
    const data =[
        {
            titulo: 'Gestión de Redes Sociales',
            dolencia: "¿Sentís que tus redes sociales no generan interacción ni conexión con tu audiencia? ¿Te cuesta mantener una presencia activa y atractiva en plataformas clave?",
servicio: "Creamos y gestionamos contenido que conecta con tu audiencia, aumentando tu visibilidad y engagement. Desarrollamos estrategias personalizadas para mantener una presencia constante y efectiva en redes sociales.",
elementoGrafico: elementoGrafico2

        },{
            titulo: 'Publicidad Digital',
            dolencia: "¿Tus campañas publicitarias no están generando el retorno de inversión que esperabas? ¿No estás alcanzando a tu público objetivo de manera eficiente?",
servicio: "Maximizamos tu inversión en campañas publicitarias en Google y redes sociales. Diseñamos y optimizamos anuncios para asegurar que lleguen a las personas adecuadas y generen resultados medibles.",
elementoGrafico: elementoGrafico3
        },{
            titulo: 'SEO y SEM',
            dolencia: "¿Tu sitio web no aparece en los primeros resultados de búsqueda? ¿No estás atrayendo el tráfico orgánico que necesitas para crecer?",
servicio: "Mejoramos tu visibilidad en los motores de búsqueda mediante técnicas avanzadas de SEO y SEM. Aumentamos el tráfico orgánico y atraemos más clientes potenciales a tu sitio web.",
elementoGrafico: elementoGrafico9
        },{
            titulo: 'Diseño Web',
            dolencia: "¿Tu sitio web no está capturando la esencia de tu marca? ¿No ofrece una experiencia de usuario intuitiva y atractiva?",
servicio: "Diseñamos sitios web que reflejan la identidad de tu marca y ofrecen una experiencia de usuario fluida y profesional. Aseguramos que tu sitio web sea visualmente impactante y funcional.",
elementoGrafico: elementoGrafico11
        },{
            titulo: 'Email Marketing',
            dolencia: "¿Tus campañas de email no logran captar la atención de tus suscriptores ni fomentar la lealtad de tus clientes?",
servicio: "Desarrollamos campañas de email marketing personalizadas que mantienen a tus clientes informados y comprometidos. Creamos contenido relevante y atractivo para mejorar la tasa de apertura y conversión.",
elementoGrafico: elementoGrafico12
        },{
            titulo: 'Creación de Contenido',
            dolencia: "¿Te resulta difícil generar contenido que resuene con tu audiencia y comunique eficazmente tu mensaje?",
servicio: "Realizamos piezas gráficas y contenido adaptado a tus necesidades específicas. Nuestro equipo se encarga de crear contenido visual y textual que impacte a tu público objetivo y refuerce tu mensaje de manera efectiva.",
elementoGrafico: elementoGrafico13
        },{
            titulo: 'Estudio de Mercado',
            dolencia: "¿No estás seguro de cuál es el mejor enfoque para tu negocio en el mercado actual? ¿Necesitás entender mejor a tu competencia y a tu audiencia?",
servicio: "Realizamos estudios de mercado exhaustivos para proporcionarte una visión clara y detallada de tu sector. Analizamos a tu competencia, identificamos oportunidades de crecimiento y te ofrecemos recomendaciones basadas en datos para que puedas tomar decisiones informadas y estratégicas.",
elementoGrafico: elementoGrafico8
        }
    ]
  return (
    
    <div className='wrapper'>
        
        <div className='acordeon'>
{data.map((item,i)=>(
    <div className='item__acordeon'>
<div className='titulo__item__acordeon' onClick={()=> toggle(i)}>
<img src={item.elementoGrafico} alt="elemento grafico" />
<h3>{item.titulo}</h3>

{selected===i ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FF6F00" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FF6F00" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
</svg> }



</div>
<div className={selected===i?'contenido__acordeon__show':'contenido__acordeon'}>
<div className={selected===i?'item__contenido__acordeon_show':'item__contenido__acordeon'}>
    <p>{item.dolencia}</p>
</div>
<div className={selected===i?'item__contenido__acordeon_show':'item__contenido__acordeon'}>
<h5>Servicio</h5>
    <p>{item.servicio}</p>
</div>
</div>
        </div>
))}
        </div>
      
    </div>
  )
}

export default Acordeon
