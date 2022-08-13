import { listaServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

console.log(listaServices)

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const imagen = document.querySelector("[data-tipo=imagen_prod]").value;
    const categoria = document.querySelector("[data-tipo=categoria]").value;
    const nombre_prod = document.querySelector("[data-tipo=nombre_prod]").value;
    const precio_prod = document.querySelector("[data-tipo=precio_prod]").value;
    const descripcion_prod = document.querySelector("[data-tipo=descripcion_prod]").value;
    console.log(imagen, categoria, nombre_prod, precio_prod, descripcion_prod);
    listaServices
    .crearCliente(imagen, categoria, nombre_prod, precio_prod, descripcion_prod)
    .then((respuesta) =>{
        console.log(respuesta)
    })
    .catch((err) => console.log(err));

});