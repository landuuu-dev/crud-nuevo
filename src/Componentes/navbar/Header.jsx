import React from 'react'
import '../navbar/Header.css'
import logo from '../../assets/logo-modoclaro.png'
import logoOscuro from '../../assets/logoOscuro.png'
import lunaClaro from '../../assets/luna-light.png'
import lunaDark from '../../assets/luna-dark.png'
import { Link } from 'react-router-dom'

const Header = ({ theme, setTheme }) => {

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div className={`navbar ${theme}`}>
      <Link to="/">
        <img src={theme === 'light' ? logo : logoOscuro} alt='logotipo' className='logo'/>
      </Link>

      <ul>
        <li><Link to="/suscripciones">Suscripciones</Link></li>
        <li><Link to="/sobre-nosotros">Sobre nosotros</Link></li>
      </ul>

      <div className="boton-container">
        <button className='boton' onClick={() => window.location.href = '/inicioSesion'}>Iniciar sesión</button>
        <button className='boton' onClick={() => window.location.href = '/registrarse'}>Crear cuenta</button>
      </div>

      <img onClick={toggle_mode} src={theme === 'light' ? lunaClaro : lunaDark} alt='modo claro' className='luna' />
    </div>
  )
}

export default Header
