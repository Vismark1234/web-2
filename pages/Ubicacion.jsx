import "./Ubicacion.css";
import ListaCartas from "../components/Carta-lista";
export default function Ubicacion() {
    return (
        <div className="contenedor-pagina4">
            <div className="imagen-princ">
                <img 
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/6f/10/lugar-unico-ambiente.jpg?w=1000&h=-1&s=1" 
                    className="img-principal" 
                />
                <div className="texto-sobrepuesto">UBICACIONES</div>
            </div>
            <div className="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.090152156358!2d-68.1294029890261!3d-16.50374674499526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20651137a89f%3A0x5c936e17712d21a0!2sFederico%20Zuazo%201976%2C%20La%20Paz!5e0!3m2!1ses-419!2sbo!4v1733758201779!5m2!1ses-419!2sbo" ></iframe>
            </div>
            <div className="titulos-pag4">
              <h1>La Paz</h1>
                _____________________________________________________________
            </div>
                <ListaCartas></ListaCartas>

            <div className="titulos-pag4">
              <h1>Cochabamba</h1>
                _____________________________________________________________
            </div>
                <ListaCartas></ListaCartas>
        </div>
    );
}
