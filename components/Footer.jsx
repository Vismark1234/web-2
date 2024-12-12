// En tu archivo JSX o HTML
import './footer.css'
// Componente Footer.jsx

export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          {/* Título */}
          <h3 className="footer-title">Ubicaciones</h3>
  
          {/* Lista de ubicaciones */}
          <div className="locations">
            <div className="location">
              <p><strong>Restaurante Miraflores</strong></p>
              <p>Avenida Busch #1234<br />La Paz, Bolivia</p>
              <p>(+591) 2 222-3344<br /><a href="mailto:miraflores@restaurante.bo">miraflores@restaurante.bo</a></p>
            </div>
            <div className="location">
              <p><strong>Restaurante Sopocachi</strong></p>
              <p>Calle Belisario Salinas #567<br />La Paz, Bolivia</p>
              <p>(+591) 2 333-4455<br /><a href="mailto:sopocachi@restaurante.bo">sopocachi@restaurante.bo</a></p>
            </div>
            <div className="location">
              <p><strong>Restaurante Calacoto</strong></p>
              <p>Avenida Ballivián #890<br />Zona Sur, La Paz, Bolivia</p>
              <p>(+591) 2 444-5566<br /><a href="mailto:calacoto@restaurante.bo">calacoto@restaurante.bo</a></p>
            </div>
          </div>
  
          {/* Links adicionales */}
          <div className="footer-links">
            <a href="/equipo">Únete a nuestro equipo</a>
            <a href="/prensa">Prensa</a>
            <a href="/politica-privacidad">Política de privacidad</a>
            <a href="/terminos">Términos y condiciones</a>
          </div>
  
          {/* Texto final */}
          <p className="footer-credit">© 2024 Restaurantes de Bolivia. Todos los derechos reservados.</p>
          <p className="footer-credit">Realizado por: CHOQUE CACHI VISMARK ABNER</p>
        </div>
      </footer>
    );
  }
  