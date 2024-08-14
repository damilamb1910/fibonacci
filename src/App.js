import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';

import { MenuProvider } from './context/MenuContext';


function App() {
  return (
   
    <MenuProvider>
    <Navbar/>
   <Home/>
    
    
    </MenuProvider>
     
    
  
   
  );
}

export default App;