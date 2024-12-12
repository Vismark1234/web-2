import GaleriaF from "../components/GaleriaF";
import "./Galeria.css"
export default function Galeria(){
    const imagenes = [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/22/a4/4b/ensalada-japonesa.jpg?w=800&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/6a/c7/71/paprika.jpg?w=500&h=-1&s=1",
        "https://popmenucloud.com/cdn-cgi/image/width%3D768%2Cheight%3D768%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/fd2c2727-fd40-48a7-b4df-906959f2e715.jpg",
        "https://popmenucloud.com/cdn-cgi/image/width%3D412%2Cheight%3D412%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/8d9b7bcb-4a0c-4883-99f7-d7f730dd1cc8.jpeg",
        "https://popmenucloud.com/cdn-cgi/image/width%3D768%2Cheight%3D768%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/26a48d26-7fbe-4ce0-aad9-7e4066ec448d.jpg",
        "https://popmenucloud.com/cdn-cgi/image/width%3D412%2Cheight%3D412%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/20a2cd4f-b3f8-40ff-af33-52c5a043ee8b.jpeg",
        "https://popmenucloud.com/cdn-cgi/image/width%3D768%2Cheight%3D768%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/0f71f5e8-721f-48a1-ad08-4c6e6bd54c55.jpg",
        "https://popmenucloud.com/cdn-cgi/image/width%3D412%2Cheight%3D412%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/b9dadd98-4d32-47d5-b976-8353b28553ab.jpg",
        "https://popmenucloud.com/cdn-cgi/image/width%3D768%2Cheight%3D768%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/d693dfb4-1b34-4eb7-9746-a6e45d4e5f38.jpg",
        "https://popmenucloud.com/cdn-cgi/image/width%3D412%2Cheight%3D412%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/dfddb0c2-9335-460f-aeb5-e8df7b2386ce.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/51/72/ensalada-de-quinua-mediterrane.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/51/85/pollo-al-limon-y-te-verde.jpg?w=1000&h=-1&s=1",
        "https://popmenucloud.com/cdn-cgi/image/width%3D412%2Cheight%3D412%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/1642b84f-8fd8-4616-a2fa-06c3cf4e10d7.jpeg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/22/a4/64/pizza-pesto.jpg?w=800&h=-1&s=1",
        "https://popmenucloud.com/cdn-cgi/image/width%3D412%2Cheight%3D412%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/dde284f3-fb73-4e18-a2fb-80b47ab972aa.jpg",
        "https://popmenucloud.com/cdn-cgi/image/width%3D768%2Cheight%3D768%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/1c5af00f-6aaf-4647-89ba-4fedafa22905.png",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/22/a4/6d/tarta-de-chocolate-blanco.jpg?w=800&h=-1&s=1",
        "https://popmenucloud.com/cdn-cgi/image/width%3D412%2Cheight%3D412%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/dde284f3-fb73-4e18-a2fb-80b47ab972aa.jpg",
        "https://popmenucloud.com/cdn-cgi/image/width%3D768%2Cheight%3D768%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/edae3e10-328c-4f15-873b-c59718e032f1.jpeg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/22/a4/51/spaguetti-a-la-mar.jpg?w=800&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/22/a4/72/tiramisu-de-maracuya.jpg?w=800&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/52/0d/steak-al-dijon.jpg?w=700&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/51/9b/distintos-acompanamientos.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/52/03/verduras-gratinadas.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/51/f1/te-helado-frozen.jpg?w=400&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/6a/c7/7a/paprika.jpg?w=700&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/45/81/96/ensalada-serrana.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/45/81/5c/viistanos-y-prueba-esta.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/45/3c/26/cayenna-bistro-cafe.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/6c/e9/fd/cayenna-bistro-cafe.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/58/61/sandwich-pita-pollo.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/58/de/torta-sacher.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/58/c9/steak-a-los-tres-sabores.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/6c/e9/e0/cayenna-bistro-cafe.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/58/b1/tabla-mezze.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/58/2c/disfruta-de-nuestras.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/45/81/49/food-week-2017.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/45/3b/ec/cayenna-bistro-cafe.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/6a/d1/15/cayenna-bistro-cafe.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/58/5e/sandwich-pita-vegetariano.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/45/81/7e/un-delicioso-lomito-con.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/58/6f/tricolor-de-avena.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/45/3c/0e/cayenna-bistro-cafe.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/45/3c/4b/cayenna-bistro-cafe.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/58/8f/crocante-de-langostinos.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/6a/d0/ec/cayenna-bistro-cafe.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/58/58/sandwich-pita-sillpancho.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/45/81/97/texturas-y-sabores-te.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/45/81/6b/spaghetti-ala-oliva.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/45/81/50/deliciosa-pizza-en-pan.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/45/81/92/animate-y-pruebala.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/45/3b/d0/cayenna-bistro-cafe.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/45/81/9b/deliciosa-campechana.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/58/bf/steak-a-los-tres-sabores.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/45/81/57/deliciosa-pizza-unica.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/45/81/4d/te-atreves.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/45/3c/60/cayenna-bistro-cafe.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/45/81/69/solo-en-cayenna-puedes.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/58/45/pukacapas.jpg?w=1000&h=-1&s=1",

        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/45/81/74/sabores-que-te-cautivaran.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/6a/d1/12/cayenna-bistro-cafe.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/6a/d1/1b/cayenna-bistro-cafe.jpg?w=900&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/58/4a/pita-pizzas.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/45/81/4c/pita-pizzas.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/45/81/8c/ensalada-teriyaky.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/6a/d0/fb/cayenna-bistro-cafe.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7e/58/d4/variedad-de-gon-tonics.jpg?w=1000&h=-1&s=1",

    
    
    ];
    
      return (
        <div className="contenedor-galeria">
          
          <div className="titulos">
              <h1>Galería de Imágenes</h1>
                _____________________________________________________________
            </div>
          <GaleriaF imagenes={imagenes} />
        </div>
      );
}