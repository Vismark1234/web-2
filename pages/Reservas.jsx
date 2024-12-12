import "./Reservas.css"
import Carta_3_col from "../components/Carta_3_col"
export default function Reservas(){
    return(
        <div className="contenedor-pag6">
            <div className="imagen-contenedor-6">
                <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/4a/72/c6/mesas-del-restaurante.jpg?w=1000&h=-1&s=1
                    "
                    className="img-pag-6"
                />
                <div className="texto-sobrepuesto-6">Reservas</div>
            </div>
            <div className="cartas">
                <Carta_3_col></Carta_3_col> 
            </div>
            


        </div>
    )
}
