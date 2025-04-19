import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../main/Producto.css'; // Asegúrate de que este archivo CSS exista

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Obtener los productos desde el backend
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/productos'); // Ajusta la URL
        setProductos(response.data); // Guarda los productos en el estado
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    obtenerProductos();
  }, []); // Se ejecuta solo una vez al montar el componente

  // Limitar la descripción a 30 caracteres
  const truncarDescripcion = (descripcion) => {
    return descripcion.length > 30 ? descripcion.substring(0, 30) + '...' : descripcion;
  };

  // Manejar el clic en la tarjeta del producto para mostrar el detalle
  const mostrarDetalles = (producto) => {
    setProductoSeleccionado(producto);
  };

  // Cerrar la ventana emergente
  const cerrarDetalles = () => {
    setProductoSeleccionado(null);
  };

  return (
    <div className="productos-container">
      <h2>Productos</h2>
      <div className="productos-lista">
        {productos.length === 0 ? (
          <p>No hay productos disponibles.</p>
        ) : (
          productos.map((producto) => (
            <div 
              key={producto.id} 
              className="producto-card" 
              onClick={() => mostrarDetalles(producto)} // Mostrar detalles al hacer clic
            >
              <h3>{producto.nombre}</h3>
              <p>{truncarDescripcion(producto.descripcion)}</p> {/* Cortar la descripción */}
              <p>Precio: ${producto.precio}</p>
              <p>Categoría: {producto.categoria}</p>
            </div>
          ))
        )}
      </div>

      {/* Ventana emergente con los detalles del producto */}
      {productoSeleccionado && (
        <div className="producto-detalle-modal">
          <div className="producto-detalle-contenido">
            <h2>{productoSeleccionado.nombre}</h2>
            <p>{productoSeleccionado.descripcion}</p>
            <p><strong>Precio:</strong> ${productoSeleccionado.precio}</p>
            <p><strong>Categoría:</strong> {productoSeleccionado.categoria}</p>
            <button className="cerrar-btn" onClick={cerrarDetalles}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productos;
