import './principal.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Tarjeta from '../components/Tarjeta';

export default function Principal(){
    return(
            <div className="contenedor11">

                    <img src="https://popmenucloud.com/cdn-cgi/image/width%3D1920%2Cheight%3D1920%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/fced4652-c38e-49ce-b1fa-4c923d591f6c.jpg" alt="" className='img-principal' />
                    <div className="carrusel">
                        
                    </div>

                    <Tarjeta
                    titulo="Platos Típicos de Bolivia"
                    descripcion="El Piqué Macho es uno de los platos más emblemáticos de la gastronomía boliviana, especialmente popular en la ciudad de Cochabamba. Este delicioso y sabroso platillo tiene una base de carne de res cortada en trozos pequeños, que se mezcla con papas fritas, cebolla, pimientos y un toque de ají picante, creando una combinación de sabores intensos y bien equilibrados."
                    imagen="https://www.lostiempos.com/sites/default/files/media_imagen/2018/8/6/pique_macho-garnica_0.jpg"
                />

                    
            </div>

    );
}