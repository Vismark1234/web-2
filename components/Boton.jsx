import React from 'react';
import { Button } from 'reactstrap';  // Importar el componente Button de reactstrap

export default function Boton(){
    return(
        <div>
        <Button
            ><a 
            href="https://maps.app.goo.gl/SitB6wAphbsCKEMU7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="no-link-style"
            text-decoration=" none" /* Asegura que no se subraye al pasar el ratón o al enfocar */
            color= "inherit" /* Mantiene el color al interactuar */

        >
            Ver ubicaciones
        </a>
            
        </Button>
        </div>
    )
}