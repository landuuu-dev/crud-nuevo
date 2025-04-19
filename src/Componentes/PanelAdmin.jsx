import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Panel.css";

const PanelAdmin = () => {
    const [producto, setProducto] = useState({
      nombre: "",
      precio: "",
      descripcion: "",
      categoria: "TECNOLOGIA",
    });
    const [productos, setProductos] = useState([]);
    const [editandoId, setEditandoId] = useState(null);
  
    const obtenerProductos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/productos");
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
  
    useEffect(() => {
      obtenerProductos();
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProducto({ ...producto, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        if (editandoId) {
          await axios.put(`http://localhost:8080/productos?id=${editandoId}`, producto);
          setEditandoId(null);
        } else {
          await axios.post("http://localhost:8080/productos", producto);
        }
        setProducto({
          nombre: "",
          precio: "",
          descripcion: "",
          categoria: "TECNOLOGIA",
        });
        obtenerProductos();
      } catch (error) {
        console.error("Error al guardar producto:", error);
      }
    };
  
    const handleEditar = (producto) => {
      setProducto(producto);
      setEditandoId(producto.id);
    };
  
    const handleEliminar = async (id) => {
        try {
          await axios.delete(`http://localhost:8080/productos?id=${id}`);
          obtenerProductos(); // Refrescar la lista después de eliminar
        } catch (error) {
          console.error("Error al eliminar producto:", error);
          alert("El producto ya no existe o hubo un error al eliminar.");
        }
      };
      
  
    const truncateDescription = (descripcion) => {
      return descripcion.length > 30 ? descripcion.substring(0, 30) + "..." : descripcion;
    };
  
    return (
      <div className="admin-panel">
        <h2>{editandoId ? "Editar Producto" : "Crear Producto"}</h2>
        <div className="panel-container">
          <form onSubmit={handleSubmit} className="producto-form">
            <label>
              Nombre:
              <input
                type="text"
                name="nombre"
                value={producto.nombre}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Precio:
              <input
                type="number"
                name="precio"
                value={producto.precio}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Descripción:
              <textarea
                name="descripcion"
                value={producto.descripcion}
                onChange={handleChange}
              />
            </label>
            <label>
              Categoría:
              <select
                name="categoria"
                value={producto.categoria}
                onChange={handleChange}
                required
              >
                <option value="TECNOLOGIA">Tecnología</option>
                <option value="ELECTRODOMESTICOS">Electrodomésticos</option>
                <option value="MUEBLES">Muebles</option>
                <option value="ROPA">Ropa</option>
              </select>
            </label>
            <button type="submit">
              {editandoId ? "Actualizar Producto" : "Crear Producto"}
            </button>
          </form>
  
          <div className="listado-productos">
            <h3>Listado de Productos</h3>
            <ul>
              {productos.map((prod) => (
                <li key={prod.id}>
                  <strong>{prod.nombre}</strong>
                  <div className="categoria">{prod.categoria}</div>
                  <p>{truncateDescription(prod.descripcion)}</p>
                  <div>
                    <button
                      className="editar"
                      onClick={() => handleEditar(prod)}
                    >
                      Editar
                    </button>
                    <button
                      className="eliminar"
                      onClick={() => handleEliminar(prod.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  // Al final de tu archivo PanelAdmin.jsx
export default PanelAdmin;
