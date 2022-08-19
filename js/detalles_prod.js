import { listaServices } from "../service/client-service.js";

const url = new URL (window.location);
const id = url.searchParams.get("id");

console.log(id)
//backticks
const crearNuevaLinea = (imagen, nombre_prod, precio_prod, descripcion_prod) => {
    const linea = document.createElement("div");
    
    const contenido = `
    <div>
        <img class="img_producto" src="${imagen}" alt="Imagen del Producto ${nombre_prod}">
    </div>
    <div class="detalles">
        <h1 class="nombre_prod">${nombre_prod}</h1>
        <h5 class="precio_prod">${precio_prod}</h5>
        <p class="descripcion_prod">${descripcion_prod}</p>
    </div>
    `;
    linea.innerHTML = contenido;
  
    return linea;
  };

  
const div = document.querySelector("[data-detalle]");



listaServices
.detalleProducto(id)
  .then((data) => {
    
      const nuevaLinea = crearNuevaLinea(data.imagen, data.nombre_prod, data.precio_prod, data.descripcion_prod);
      div.appendChild(nuevaLinea).className = "div_acd";
    
  })
  .catch((error) => alert("Oops! Error. Comuniquese con Matr3"));



