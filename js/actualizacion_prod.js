import { listaServices } from "../service/client-service.js";
//backticks
const crearNuevaLinea = (imagen,categoria,nombre_prod,precio_prod,id) => {
    const linea = document.createElement("div");
    const contenido = `
    <div class="articulo" data-producto>
    <div class="articulo_edicion">
        <a class="position_icon" href="#"><img class="icon" src="./img/editar.png" alt=""></a>
        <a class="position_icon" href="#"><img class="icon" src="./img/borrar.png" alt=""></a>
    </div>
    <img class="img" src="${imagen}" alt="Imagen del producto">
    <div class="lista_descripcion">
        <ul>
            <li class="nombre_producto">${nombre_prod}</li>
            <li class="precio_producto">${precio_prod}</li>
            <li class="number_producto">${id}</li>
        </ul>   
    </div>
    </div>
    `;
    linea.innerHTML = contenido;
    /*
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
      const id = btn.id;
      clientServices
        .eliminarCliente(id)
        .then((respuesta) => {
          console.log(respuesta);
        })
        .catch((err) => alert("Ocurrió un error"));
    });
  */
    return linea;
  };