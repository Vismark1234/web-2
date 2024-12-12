import React from 'react';
import './Carta_2_col.css'; // Asegúrate de que este archivo CSS esté presente

export default function Carta_2_col_ensalada(){
  return (
    <div className="menu-container">
      <div className="menu-row">
        <div className="menu-card">
            <div className='cont-img'>
            <img
                src="https://popmenucloud.com/cdn-cgi/image/width%3D1920%2Cheight%3D1920%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/2aa4a3a6-86ba-462e-b9fc-fac88ece3d4c.jpg"
                alt="Pique Macho"
                className="menu-img"
            />
          </div>
          <div className="menu-card-body">
            <h5 className="menu-title">
            Altiplano Fresco</h5>
            <p className="menu-description">
            Hojas tiernas de col rizada, quinua real, cebolla verde, remolacha amarilla, pasas doradas, nuez amazónica confitada, tomatitos amarillos y rojos, cilantro fresco, queso chaqueño hilado, vinagreta de limón y miel.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>

        <div className="menu-card">
            <div className='cont-img'>  <img
            src="https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/8eb31554-d17f-41e2-84f4-b6a65fecf5ec.jpg"
            alt="Mondongo"
            className="menu-img"
          />
          </div>
          <div className="menu-card-body">
            <h5 className="menu-title">Cumbre Andina</h5>
            <p className="menu-description">
            Lechuga romana, verduras mixtas, tocino ahumado artesanal, huevo cocido, palta, tomatitos cherry, crocantes de maíz andino, aderezo ranch de locoto.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>
      </div>

      <div className="menu-row">
        <div className="menu-card">
        <div className='cont-img'><img
            src="https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/0d78195c-5f3a-4272-9860-ff0a06dfc044.jpg"
            alt="Silpancho"
            className="menu-img"
          />
          </div>
          <div className="menu-card-body">
            <h5 className="menu-title">Corazon</h5>
            <p className="menu-description">
            Hojas de lechuga criolla, palmitos de Santa Cruz, palta, tomatitos cherry, vinagreta de limón y miel de caña.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>

        <div className="menu-card">
        <div className='cont-img'><img
            src="https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/d50f06ed-3c06-4512-9a9e-f4e1abcc5a6b.jpg"
            alt="Sopa de Mani"
            className="menu-img"
          /></div>
          <div className="menu-card-body">
            <h5 className="menu-title">Campesina</h5>
            <p className="menu-description">
            Hojas de quirquiña baby, remolacha dorada y roja, tostada de nuez amazónica, durazno caramelizado, queso chaqueño con pimienta negra, vinagreta de tumbo.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>
      </div>

      <div className="menu-row">
        <div className="menu-card">
        <div className='cont-img'><img
            src="https://popmenucloud.com/cdn-cgi/image/width%3D1920%2Cheight%3D1920%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/straynmo/d528031d-845a-4ea2-b84d-3c6a92154379.jpg"
            alt="Chicharron"
            className="menu-img"
          /></div>
          <div className="menu-card-body">
            <h5 className="menu-title">Cazadora</h5>
            <p className="menu-description">
            Disfrútelo picado con su elección de proteína y locoto. Lechuga romana fresca, verduras mixtas, tocino ahumado artesanal, cebolla morada, tomatitos cherry, maíz choclo asado, queso chaqueño hilado, crocantes de maíz andino y vinagreta de palta.</p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>

        
      </div>
    </div>
  );
}
