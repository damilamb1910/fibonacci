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


const Home = () => {
  const {toggleMenu}=useContext(MenuContext)
  
  const [loading,setLoading]=useState(true)
  
  useEffect(()=>{
    toast('soy un toast')
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
           <Toaster />
           <div className='landing__and__particle__container'>
            <ParticleCircle/>
           </div>
            <div className='slogan__container'>
              <h4>We are</h4>
              <h1> Fibonacci</h1>
             
            </div>
            <h3>Ayudamos a +15 empresas en toda argentina.</h3>

      </div>
       
        
      <div id='nosotros'>
            <Nosotros/>
          </div>
          <div id='servicios'>
          <Servicios/>
          </div>
          <div id='comoTrabajamos'>
          <ComoTrabajamos/>
          </div>
      
     
     
      
      
     
      
     
    </div>
  )
}

export default Home
