import React, { useEffect, useState } from 'react'
import './home.css'
import { useContext } from 'react';
import Loading from '../Loading/Loading'
import { Toaster, toast } from 'sonner';
import { MenuContext } from '../../context/MenuContext';
import ParticleCircle from '../ParticleCircle/ParticleCircle';
import Servicios from '../servicios/Servicios';
import ComoTrabajamos from '../comotrabajamos/ComoTrabajamos';
import Nosotros from '../nosotros/Nosotros';
import Footer from '../footer/Footer';
import img from '../../assets/img/espiralfinal5.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  const {toggleMenu}=useContext(MenuContext)
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [loading,setLoading]=useState(true)
  const mensajes = [
    "¿Sabías que las empresas que invierten en marketing digital pueden aumentar su visibilidad hasta un 80% en los primeros 6 meses?",
    "Trabajar con una agencia de marketing profesional puede incrementar tus conversiones hasta un 120%. ¡Haz crecer tu negocio hoy!",
    "Las empresas que delegan su marketing digital a expertos tienen un 60% más de probabilidades de captar nuevos clientes.",
    "¿Sabías que el 70% de las empresas que usan estrategias digitales logran un retorno de inversión positivo en menos de un año?",
    "Con una agencia de marketing, tus campañas estarán optimizadas para obtener hasta un 3x en retorno de inversión. ¡Contáctanos y crece!"
  ];
  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * mensajes.length);
    return mensajes[randomIndex];
  };
  
  useEffect(()=>{
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      once: true, // Si la animación solo debe ocurrir una vez
    });
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    toast(<div>
      <p>{getRandomMessage()}</p>
      <button className='toast__button' onClick={()=>{window.open('https://wa.me/541136684089', '_blank')}} style={{ color: 'white', background: 'blue', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>
        Contáctanos
      </button>
    </div>, 
    {
      duration: 50000, // Duración del toast en milisegundos (5 segundos)
    })
    window.scrollTo(0,0)
    setLoading(true)
    setTimeout(() => {
      cambiarLoad();
      window.scroll({
        top:0,
        behavior: "smooth",
      });
    }, "5000");
  },[])
  const handleClick = () => {
   
  toggleMenu()  
};
  const cambiarLoad=()=>{
    setLoading(false)
  }
  return (
    <div className='home' onClick={handleClick}>
      
     


           <div className='landing__container'>
           <Loading loading={loading}/>
           {windowSize > 600 && <Toaster />   }
           
           <div className='landing__and__particle__container'>
            {windowSize > 600 ? <ParticleCircle/> : <img className='reveal-image' src={img} alt="" />  }
            
           </div>
            <div className='slogan__container'>
              <h4 data-aos="fade-up">We are</h4>
              <h1 data-aos="fade-right"> Fibonacci</h1>
             
            </div>
            <h3>Ayudamos a +15 empresas en toda argentina.</h3>

      </div>
       
        
      <div id='nosotros'>
            <Nosotros/>
          </div>
          <div id='servicios'>
          <Servicios/>
          </div>
          <div id='comotrabajamos'>
          <ComoTrabajamos/>
          </div>
      
     
     
      
      
     <Footer/>
      
     
    </div>
  )
}

export default Home
