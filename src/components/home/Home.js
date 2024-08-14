import React, { useEffect, useState } from 'react'
import './home.css'
import { useContext } from 'react';
import Loading from '../Loading/Loading'

import { MenuContext } from '../../context/MenuContext';
import ParticleCircle from '../ParticleCircle/ParticleCircle';


const Home = () => {
  const {toggleMenu}=useContext(MenuContext)
  
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    
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
           <div className='landing__and__particle__container'>
           <h3>Estamos creando diseños inolvidables y transformando marcas.</h3>
            
            <ParticleCircle/>
            <h3>Ayudó a cambiar más de 40 empresas en todo el mundo.</h3>
         
        
           </div>
            <div className='slogan__container'>
              <h4>We are</h4>
              <h1> Fibonacci</h1>
            </div>
          
        
      


      </div>
       
        

      
     
     
      
      
     
      
     
    </div>
  )
}

export default Home
