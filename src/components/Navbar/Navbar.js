
import logo from "../../assets/img/logo.png"
import logo2 from "../../assets/img/logo2.png"
import "./Navbar.css"
import { useState } from "react"
import { useEffect } from "react"
import { useContext } from 'react';
import { MenuContext } from "../../context/MenuContext"



const Navbar=(click)=>{
    const{menuOpen}=useContext(MenuContext)
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
    useEffect(() => {
        function handleResize() {
          setWindowSize(window.innerWidth);
        }
        function handleScroll() {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos;
      
            setVisible(isVisible);
            setPrevScrollPos(currentScrollPos);
          }
    
    comprobar()
        window.addEventListener('resize', handleResize);
        window.addEventListener("scroll", handleScroll);
    
        return () => {window.removeEventListener('resize', handleResize);
                     window.removeEventListener("scroll", handleScroll);}
      }, [prevScrollPos]);
    const comprobar=()=>{
        if(menu===true){
            toggleMenu()
        }
    }
    const [menu, setMenu]=useState(false)
    const toggleMenu=()=>{
        setMenu(!menu)
        
        
    }

    return(
        <header className={`header ${visible ? "visible" : "hidden"}`} onClick={comprobar}>
       <a href="#"><div className="logos__container"><img className="logo2" src={logo2} alt="" /><img className="logo" src={logo} alt="" /></div></a>
       <button onClick={toggleMenu} className="menu-boton">
           <svg className="menu" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  viewBox="0 0 16 16">
  <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
           </button>
           <nav className={`header__nav ${menu ? 'isActive' : ''} `}>
            
            
{windowSize < 1500 ? (
           <ul  className="nav__ul">
<a href="#nosotros"><li className="nav__item">Sobre Nosotros</li></a>
            <a href="#servicios" ><li className="nav__item">Servicios</li></a> 
            <a href="#comotrabajamos"><li className="nav__item">¿Como trabajamos?</li></a>
            <a href="#contacto"><li className="nav__item">Contacto</li></a>

            </ul>
            
                ):(
                    <ul  className="nav__ul">
                       <a href="#nosotros"><li className="nav__item">Sobre Nosotros</li></a>
            <a href="#servicios" ><li className="nav__item">Servicios</li></a> 
            <a href="#comotrabajamos"><li className="nav__item">¿Como trabajamos?</li></a>
            
            
            </ul>
    )}
      
          
           
        </nav>
       
        {windowSize > 1300 && (<a className="hablemos" href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
</svg> Hablemos!</a>)  }     

        
    </header>
    )
}

export default Navbar