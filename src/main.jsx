import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Principal from '../pages/Principal';
import Menu from '../pages/Menu';
import Header1 from '../components/Header1';
import Footer from '../components/Footer';
import Galeria from '../pages/Galeria';
import Ubicacion from '../pages/Ubicacion';
import Nosotros from '../pages/Nosotros';
import Reservas from '../pages/Reservas';

createRoot(document.getElementById('root')).render(
<BrowserRouter>

    <Header1></Header1>
            
    <Principal/>
                <Routes>
                <Route path="/menu" element={<Menu/>} />

                <Route path="/galeria" element={<Galeria/>} />

                <Route path="/ubicacion" element={<Ubicacion/>} />

                <Route path="/nosotros" element={<Nosotros/>} />

                <Route path="/reservas" element={<Reservas/>} />
            </Routes>

            <Footer></Footer>
  
    </BrowserRouter>

)
