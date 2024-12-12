import React from 'react';
import './Carta-3-col.css'; // Asegúrate de que este archivo CSS esté presente

export default function Carta_3_col(){
  return (
    <div className="menu-container">
      <div className="menu-row">
        <div className="menu-card">
            <div className='cont-img'>
            <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/cc/02/cb/caption.jpg?w=1000&h=-1&s=1"
                
                className="menu-img"
            />
          </div>
          <div className="menu-card-body">
            <h5 className="menu-title">Sucursal 1</h5>
            <p className="menu-description">
            Un delicioso guiso de carne de res con papas, salsa picante, cebolla, tomate y especias, típico del occidente boliviano.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>

        <div className="menu-card">
            <div className='cont-img'>  <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/01/b6/72/caption.jpg?w=1000&h=-1&s=1"
            className="menu-img"
          />
          </div>
          <div className="menu-card-body">
            <h5 className="menu-title">Sucursal 2</h5>
            <p className="menu-description">
            Un suculento plato a base de carne de cerdo, mote, maíz y condimentos, servido con salsa de maní y ají amarillo, un clásico de las fiestas y reuniones.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>

        
        <div className="menu-card">
            <div className='cont-img'>  <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/73/26/e4/en-la-torre-multicine.jpg?w=1000&h=-1&s=1"
            className="menu-img"
          />
          </div>
          <div className="menu-card-body">
            <h5 className="menu-title">Sucursal 3</h5>
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
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/62/6e/ae/popular.jpg?w=1000&h=-1&s=1"
            className="menu-img"
          />
          </div>
          <div className="menu-card-body">
            <h5 className="menu-title">Sucursal 4</h5>
            <p className="menu-description">
            Filete de carne empanado, acompañado de arroz, papas fritas y ensalada fresca, con un toque de limón.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>

        <div className="menu-card">
        <div className='cont-img'><img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/4b/71/98/fachada.jpg?w=1000&h=-1&s=1"
            className="menu-img"
          /></div>
          <div className="menu-card-body">
            <h5 className="menu-title">Sucursal 5</h5>
            <p className="menu-description">
            Un reconfortante caldo con maní molido, verduras y carne, ideal para calentar el cuerpo durante los días fríos.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>
        <div className="menu-card">
        <div className='cont-img'><img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/0e/78/25/caption.jpg?w=1000&h=-1&s=1"
            className="menu-img"
          /></div>
          <div className="menu-card-body">
            <h5 className="menu-title">Sucursal 6</h5>
            <p className="menu-description">
            Un reconfortante caldo con maní molido, verduras y carne, ideal para calentar el cuerpo durante los días fríos.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>
      </div>

      

    </div>
  );
}
