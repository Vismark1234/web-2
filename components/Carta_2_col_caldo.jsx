import React from 'react';
import './Carta_2_col.css'; // Asegúrate de que este archivo CSS esté presente

export default function Carta_2_col_caldo(){
  return (
    <div className="menu-container">
      <div className="menu-row">
        <div className="menu-card">
            <div className='cont-img'>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBRhihXqIXaGTw17JvVABWXARCsS9hYoXeMg&s"
                className="menu-img"
            />
          </div>
          <div className="menu-card-body">
            <h5 className="menu-title">
            Caldo de Calabaza y Jengibre</h5>
            <p className="menu-description">
            Este caldo suave y ligeramente dulce, a base de calabaza, zanahorias y un toque de jengibre fresco, es reconfortante y saludable.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>

        <div className="menu-card">
            <div className='cont-img'>  <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSUYxOvUolSeGN8ScII3S4xWm2zn51WOOrw&s"
            className="menu-img"
          />
          </div>
          <div className="menu-card-body">
            <h5 className="menu-title">Caldo de Pollo al Curry</h5>
            <p className="menu-description">
            Un caldo sabroso con trozos de pollo, zanahorias, apio y papas, sazonado con curry y otras especias que le dan un sabor exótico y delicioso.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>
      </div>

      <div className="menu-row">
        <div className="menu-card">
        <div className='cont-img'><img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhL3oXXE0ezPDKzU6Sj7ryxuC6JAH8lTOtwGTEBTyC7VDQ4TCUZtaoj5mMDnwuax9Zuy-mGpk5TdoYXacDuz8JUbAtvoF8QvEyTrMyd3Yt_CnwfZ4IvHdNU5RasVdXpCNElSK8G0iadynE/s1600/sopa-de-acelgas-con-patatas.jpg"
            className="menu-img"
          />
          </div>
          <div className="menu-card-body">
            <h5 className="menu-title">Caldo de Acelga con Huevo</h5>
            <p className="menu-description">Un caldo saludable y ligero hecho con acelga, cebolla y papas, servido con un huevo cocido o escalfado encima, perfecto para una comida reconfortante.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>

        <div className="menu-card">
        <div className='cont-img'><img
            src="https://www.nestleprofessional-latam.com/sites/default/files/styles/np_recipe_detail/public/2023-10/847737-crema-de-puerros-y-papa.jpg?itok=clBy4O3t"
           
            className="menu-img"
          /></div>
          <div className="menu-card-body">
            <h5 className="menu-title">Caldo de Puerro y Papas:</h5>
            <p className="menu-description">
            Un caldo suave y cremoso con puerros, papas y zanahorias, ideal para acompañar platos principales o disfrutar solo como una sopa ligera.
            </p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>
      </div>

      <div className="menu-row">
        <div className="menu-card">
        <div className='cont-img'><img
            src="https://chipabythedozen.com/wp-content/uploads/2022/06/sopa-de-mani-boliviana.jpg"
            
            className="menu-img"
          /></div>
          <div className="menu-card-body">
            <h5 className="menu-title">Sopa de Maní</h5>
            <p className="menu-description">
            Una sopa espesa y cremosa hecha con maní molido, carne de res o cerdo, papas, zanahorias y mote. Es un plato tradicional boliviano, reconfortante y lleno de sabor, ideal para los días fríos.</p>
            <button className="menu-btn"><a href='https://maps.app.goo.gl/SitB6wAphbsCKEMU7' className='linkk'>Ir al lugar</a></button>
          </div>
        </div>

        
      </div>
    </div>
  );
}
