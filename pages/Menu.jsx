import Carrusel from "../components/Carrusel";
import './Menu.css';
import Carta_2_col_caldo from "../components/Carta_2_col_caldo";
import C from "../components/C";
import Carta_2_col from "../components/Carta_2_col";
import Carta_2_col_ensalada from "../components/Carta_2_col_ensalada";
import Carta_2_col_pos from "../components/Carta_2_col_pos";
export default function Menu() {
    return (
        <div className="contenedor-pagina-2">
            <div className="carrusel-pagina-2">
                <div className="texto-sobrepuesto">MENÚ</div> {/* Texto sobrepuesto */}
                <Carrusel />
            </div>

            <div className="titulos">
                <p>Platos fuertes</p>
                _____________________________________________________________
            </div>
            
            <div className="carta-menu">
                
                <div className="cc">
            
                    <Carta_2_col></Carta_2_col>
                </div>
                
            </div>


            <div className="titulos">
                <p>Caldos</p>
                _____________________________________________________________
            </div>
            <div className="carta-menu">
                
                <div className="cc">
            
                    <Carta_2_col_caldo></Carta_2_col_caldo>
                </div>
                
            </div>

            
            <div className="titulos">
                <p>Entradas</p>
                _____________________________________________________________
            </div>
            <div className="carta-menu">
                
                <div className="cc">
            
                    <Carta_2_col_ensalada></Carta_2_col_ensalada>
                </div>
                
            </div>
            

            <div className="titulos">
                <p>Postres</p>
                _____________________________________________________________
            </div>
            <div className="carta-menu">
                
                <div className="cc">
            
                    <Carta_2_col_pos></Carta_2_col_pos>
                </div>
                
            </div>
            
        </div>
    );
}
