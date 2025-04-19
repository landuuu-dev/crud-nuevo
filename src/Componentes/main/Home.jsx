import React from 'react';
import Buscador from './Buscador';
import Categorias from './Categorias';
import Productos from './Productos';
import './mainHome.css'

const Home = () => {
  return (
    <div className='contenedor'>
      <Buscador />
      <Categorias />
      <Productos />
    </div>
  );
};

export default Home;
