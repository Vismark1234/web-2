import React from 'react';
import './Carta_2_col.css'; // Asegúrate de que este archivo CSS esté presente

export default function Carta_2_col(){
  return (
    <div className="menu-container">
      <div className="menu-row">
        <div className="menu-card">
            <div className='cont-img'>
            <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/e0/69/b0/punto-de-encuentro.jpg?w=1000&h=-1&s=1"
                alt="Pique Macho"
                className="menu-img"
            />
          </div>
          <div className="menu-card-body">
            <h5 className="menu-title">Pique Masacho</h5>
            <p className="menu-description">
            Un delicioso guiso de carne de res con papas, salsa picante, cebolla, tomate y especias, típico del occidente boliviano.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>

        <div className="menu-card">
            <div className='cont-img'>  <img
            src="https://vision360-s3.cdn.net.ar/s3i233/2024/05/vision360/images/79/08/790803_8497a44a722543eb39af713d33c16bcb140f6969d5213fd0ece03148e62e461e/md.webp"
            alt="Mondongo"
            className="menu-img"
          />
          </div>
          <div className="menu-card-body">
            <h5 className="menu-title">Mondongo</h5>
            <p className="menu-description">
            Un suculento plato a base de carne de cerdo, mote, maíz y condimentos, servido con salsa de maní y ají amarillo, un clásico de las fiestas y reuniones.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>
      </div>

      <div className="menu-row">
        <div className="menu-card">
        <div className='cont-img'><img
            src="https://www.196flavors.com/wp-content/uploads/2018/09/silpancho-1-FP.jpg"
            alt="Silpancho"
            className="menu-img"
          />
          </div>
          <div className="menu-card-body">
            <h5 className="menu-title">Silpancho</h5>
            <p className="menu-description">
            Filete de carne empanado, acompañado de arroz, papas fritas y ensalada fresca, con un toque de limón.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>

        <div className="menu-card">
        <div className='cont-img'><img
            src="https://comidasbolivianas.org/wp-content/uploads/2020/09/sopa-de-mani-comida-boliviana.jpg"
            alt="Sopa de Mani"
            className="menu-img"
          /></div>
          <div className="menu-card-body">
            <h5 className="menu-title">Sopa de Mani</h5>
            <p className="menu-description">
            Un reconfortante caldo con maní molido, verduras y carne, ideal para calentar el cuerpo durante los días fríos.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>
      </div>

      <div className="menu-row">
        <div className="menu-card">
        <div className='cont-img'><img
            src="https://i.ytimg.com/vi/VRarMMdBSR8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLANv3N7y6Yubzjvgm6qLUYt9Li-Mg"
            alt="Chicharron"
            className="menu-img"
          /></div>
          <div className="menu-card-body">
            <h5 className="menu-title">Chicharron</h5>
            <p className="menu-description">
            Carnes de cerdo crujientes, acompañadas de chuño, mote o ensalada, una receta tradicional del altiplano.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>

        <div className="menu-card">
        <div className='cont-img'><img
            src="https://www.lostiempos.com/sites/default/files/media_imagen/2018/8/6/majadito-patricia_bloomfield_moreno.jpg"
            alt="Majadito"
            className="menu-img"
          /></div>
          <div className="menu-card-body">
            <h5 className="menu-title">Majadito</h5>
            <p className="menu-description">
            Arroz con carne desmenuzada, acompañado de plátano frito y ensalada, un plato sabroso y energético de la región tropical.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}
