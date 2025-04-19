import React, { useState } from 'react';
import '../navbar/BurgerMenu.css'; // Asegúrate de tener el archivo CSS para estilos
import lunaClaro from '../../assets/luna-light.png'
import lunaDark from '../../assets/luna-dark.png'

const BurgerMenu = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambia el estado al hacer clic
  };

  return (
    <div className='burger-completo'>
      {/* Icono de burger */}
      <div 
        className={`burger-icon ${isOpen ? 'open' : ''} ${theme === 'dark' ? 'dark' : 'light'}`} 
        onClick={toggleMenu}
      >
        <div className={`burger-line ${theme === 'dark' ? 'dark' : 'light'}`}></div>
        <div className={`burger-line ${theme === 'dark' ? 'dark' : 'light'}`}></div>
        <div className={`burger-line ${theme === 'dark' ? 'dark' : 'light'}`}></div>
      </div>

      {/* Menú desplegable */}
      <div className={`burger-menu ${isOpen ? 'open' : ''} ${theme === 'dark' ? 'dark' : 'light'}`}>
        <ul className='letra' >
          <li><a href="/suscripciones">Suscripciones</a></li>
          <li><a href="/sobre-nosotros">Sobre nosotros</a></li>
          <li><a href="/registrarse">Registrarse</a></li>
          <li><a href="/inicioSesion">Iniciar sesión</a></li>
          <img 
          onClick={toggle_mode} 
          src={theme === 'light' ? lunaClaro : lunaDark} 
          alt='modo claro' 
          className='luna' 
        />
        </ul>
        {/* Cambia de ícono según el tema */}
        
      </div>
    </div>
  );
};

export default BurgerMenu;
