# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# API Endpoints

## Endpoints disponibles

### Listar todos los productos

```http
GET https://java-railway-apirest-production-8375.up.railway.app/productos
```

**Descripción:** Recupera la lista de todos los productos disponibles.

---

### Obtener producto por ID

```http
GET https://java-railway-apirest-production-8375.up.railway.app/productos?id=2
```

**Parámetros:**
| Key | Value     | Descripción                  |
|-----|----------|------------------------------|
| id  | `2`   | |

**Descripción:** Recupera el producto con el id especificado si se encuentra disponible.

---

### Agregar productos

```http
POST https://java-railway-apirest-production-8375.up.railway.app/productos
```

**Cuerpo de la solicitud (JSON):**
```json
{
    "nombre": "Agenda sin fechas + calendario",
    "precio": "15.00",
    "descripcion": "Agenda tamaño A5 con 100 hojas"
}
```

**Descripción:** Crea un nuevo producto con los datos especificados.

---

### Actualizar producto

```http
PUT https://java-railway-apirest-production-8375.up.railway.app/productos?id=2
```

**Parámetros:**
| Key | Value     | Descripción                  |
|-----|----------|------------------------------|
| id  | `2`   |  |

**Cuerpo de la solicitud (JSON):**
```json
{
    "nombre": "Libreta",
    "precio": "5.00",
    "descripcion": "Libreta tamaño A5 con 100 hojas"
}
```

**Descripción:** Actualiza los detalles de un producto existente.

---

### Eliminar producto

```http
DELETE https://java-railway-apirest-production-8375.up.railway.app/productos?id=2
```

**Parámetros:**
| Key | Value     | Descripción                  |
|-----|----------|------------------------------|
| id  | `2`   | |

**Descripción:** Elimina un producto del sistema según el ID especificado.
#   c r u d - n u e v o 
 
 