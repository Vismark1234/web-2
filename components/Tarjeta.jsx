import "./tarjeta.css";
import Boton from "./Boton";

export default function Tarjeta({ titulo, descripcion, imagen }) {
    return (
        <div className="contenedorTarjeta">
            <div className="desripcionTarjeta">
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
                <Boton></Boton>
            </div>
            <div className="imagenTarjeta">
                <img src={imagen} alt={titulo} className="imgTarjeta" />
            </div>
        </div>
    );
}
