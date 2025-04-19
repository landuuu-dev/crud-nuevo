import React, { useEffect, useState } from 'react'
import Header from './Componentes/navbar/Header'
import Productos from './Componentes/main/Productos'
import SobreNosotros from './Componentes/SobreNosotros';
import Suscripciones from './Componentes/Suscripciones';
import Home from './Componentes/main/Home';
import Registrarse from './Componentes/Registrarse';
import InicioSesion from './Componentes/InicioSesion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BurgerMenu from './Componentes/navbar/BurgerMenu';
import PanelAdmin from './Componentes/PanelAdmin';



const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(()=>{
    localStorage.setItem('current_theme', theme);

  }, [theme])

  return (
    <Router>
    <Header theme={theme} setTheme={setTheme} />
    <BurgerMenu theme={theme} setTheme={setTheme}/>

    <div className={`container ${theme}`}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/suscripciones" element={<Suscripciones/>}/>
        <Route path="/registrarse" element={<Registrarse/>}/>        
        <Route path="/inicioSesion" element={<InicioSesion/>}/>
        <Route path='/panelAdmin' element={<PanelAdmin/>}></Route>
      </Routes>
    </div>
  </Router>
  )
}

export default App