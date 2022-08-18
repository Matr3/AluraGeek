import { listaServices } from "../service/client-service.js";

const url = new URL (window.location);
const id = url.searchParams.get("id");
//backticks
const crearNuevaLinea = (imagen,nombre_prod,precio_prod,descripcion_prod,id) => {
    const linea = document.createElement("div");
    
    const contenido = `
    <section class="producto_principal">
    <div>
        <img class="img_producto" src="${imagen}" alt="">
    </div>
    <div class="detalles">
        <h1 class="nombre_prod">${nombre_prod}</h1>
        <h5 class="precio_prod">${precio_prod}</h5>
        <p class="descripcion_prod">${descripcion_prod}</p>
    </div>
    </section>`;
    linea.innerHTML = contenido;
  
    return linea;
  };

  
const div = document.querySelector("[data-detalle]");



listaServices
.detalleProducto()
  .then((data) => {
    data.forEach(({ imagen,nombre_prod,precio_prod,descripcion_prod,id }) => {
      const nuevaLinea = crearNuevaLinea(imagen,nombre_prod,precio_prod,descripcion_prod,id);
      div.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Oops! Error. Comuniquese con Matr3"));


