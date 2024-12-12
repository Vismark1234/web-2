import "./Nosotros.css";
import Tarjeta from "../components/Tarjeta";

export default function Nosotros() {
    return (
        <div className="contenedor-pagina5">
            <div className="imagen-contenedor">
                <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/bd/35/1a/restaurant.jpg?w=1000&h=-1&s=1
                    "
                    className="img-pag-5"
                />
                <div className="texto-sobrepuesto">Nosotros</div>
            </div>
            <div>
                
                <Tarjeta
                    titulo="Sabores Bolivianos"
                    descripcion="Somos un restaurante líder con 11 años de tradición, enfocados en preservar la esencia de la gastronomía boliviana.

                    Sabores bolivianos es más que un restaurante: es un hogar. Lo demostramos con la calidez de nuestra atención en cada visita y en los detalles únicos de cada plato, donde reflejamos la riqueza de nuestra cultura."
                    imagen="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/73/26/e0/terra-restaurant.jpg?w=1000&h=-1&s=1"
                />
            </div>
            <div className="contt">
                
                <Tarjeta
                    titulo="Sabore en nuestra historia"
                    descripcion="Nuestra historia nace del esfuerzo y la visión de Vismarck Choque, un apasionado de la cocina boliviana que, desde muy joven, recorrió los mercados y comunidades de nuestro país, aprendiendo directamente de las manos de las mamás y abuelas que conservan las recetas más auténticas de nuestras tradiciones. Con el apoyo de su familia, especialmente de su esposa, Vismarck transformó su pasión en un restaurante que rescata los sabores originales y los aromas inolvidables de la cocina boliviana, logrando conquistar paladares y recibir importantes reconocimientos.

Sabores Bolivianos es el resultado de un viaje lleno de aprendizaje, trabajo arduo y amor por nuestra cultura. Con cada plato, rendimos homenaje a las raíces que nos unen y celebramos los momentos compartidos alrededor de la mesa. No en vano nuestro lema es: en esta casa sí hay cariño, una frase que resume la esencia de nuestra gastronomía: recuerdos de la niñez, reuniones familiares y la calidez de un lugar qu

Hoy, con el mismo espíritu que lo vio nacer, Sabores Bolivianos te abre sus puertas. Te recibimos con el cariño de siempre, llevándote a esos momentos mágicos de tu vida a través de nuestros platos. ¡Buen provecho y bienvenidos a esta casa llena de tradición!
        "
                    imagen="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/44/84/42/morron-mercado-rodriguez.jpg?w=1000&h=-1&s=1"
                />
            </div>
            <div className="titulos">
                <p>VISION</p>
                _____________________________________________________________
                <p>
                Ser un exponente de la gastronomía a nivel mundial.
                </p>
            </div>
            <div className="titulos">
                <p>MISION</p>
                _____________________________________________________________
                <p className="cont-tit">
                Satisfacer las necesidades gastronómicas de nuestros clientes, ofreciendo alimentos y servicios con la más alta calidad, donde superen las expectativas y además de ser un espacio de trabajo que permita el desarrollo de sus colaboradores y su constante aprendizaje.
                </p>
            </div>
          




            </div>
    );
}
