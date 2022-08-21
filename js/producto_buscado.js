
import { listaServices } from "../service/client-service.js";

const url = new URL(window.location);
const buscar_prod = url.searchParams.get("buscar");

let cont = 0;

//backticks
const crearNuevaLinea = (imagen, nombre_prod, precio_prod, descripcion_prod, buscar_prod) => {
    const linea = document.createElement("div");

    const contenido = `
        <div class="productos_title">
            <h2 class="title_full__productos">Buscar los productos ${buscar_prod}</h2>
        </div>
        <div class="articulos_descripcion">
            <div>
                <img class="img_producto" src="${imagen}" alt="Imagen del Producto ${nombre_prod}">
            </div>
            <div class="detalles">
                <h1 class="nombre_prod">${nombre_prod}</h1>
                <h5 class="precio_prod">${precio_prod}</h5>
                <p class="descripcion_prod">${descripcion_prod}</p>
            </div>
        </div>
    `;

    linea.innerHTML = contenido;

    return linea;
};

const crearErrorLinea = (buscar_prod) => {
    const lineaError = document.createElement("div");

    const contenido = `
        <div class="productos_title">
            <h2 class="title_full__productos">Buscar los productos ${buscar_prod}</h2>
        </div>
        <div class="articulos_descripcion">
            <div>
                <img class="img_producto" src="./img/errorBusqueda.png" alt="No se encontro ${buscar_prod}">
            </div>
            <div class="detalles">
                <h1 class="nombre_prod">No se encontro ningun producto con el nombre ${buscar_prod}, realize una nueva busqueda. =)</h1>
            </div>
        </div>
    `;

    lineaError.innerHTML = contenido;

    return lineaError;
};

const div = document.querySelector("[data-producto]");

listaServices
    .listaProductos()
    .then((data) => {
        data.forEach(({ imagen, nombre_prod, precio_prod, descripcion_prod}) => { 
        console.log(nombre_prod) 
          
        if(buscar_prod == nombre_prod){
            const nuevaLinea = crearNuevaLinea(imagen, nombre_prod, precio_prod, descripcion_prod, buscar_prod);
            div.appendChild(nuevaLinea); 
        }
        }
        
        )const nuevaLinea = crearErrorLinea(buscar_prod);
        div.appendChild(nuevaLinea);
})
.catch((error) => alert("Oops! Error. Comuniquese con Matr3"));
