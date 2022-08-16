//Fetch API
const url = "https://62faaedbffd7197707f152a5.mockapi.io/prod";

const listaClientes = () =>{
    return fetch("https://62faaedbffd7197707f152a5.mockapi.io/user").then(respuesta =>{
        return respuesta.json();
    });
};
const listaProductos = () => fetch("https://62faaedbffd7197707f152a5.mockapi.io/prod").then((respuesta) => respuesta.json()).catch((error) => error);

const crearCliente = (imagen, categoria, nombre_prod, precio_prod, descripcion_prod) => {
    console.log(imagen, categoria, nombre_prod, precio_prod, descripcion_prod)
    return fetch((`${url}`),{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            imagen,
            categoria,
            nombre_prod,
            precio_prod,
            descripcion_prod
      
        })
    })
}

const eliminarCliente = (id) =>{
    console.log("eliminar a", id)
    return fetch(`https://62faaedbffd7197707f152a5.mockapi.io/user/:id`, {
        method: "DELETE"
    })
}

const detalleCliente = (id) =>{
    return fetch(`https://62faaedbffd7197707f152a5.mockapi.io/user/:id`)
    .then( (respuesta) => respuesta.json())
}

const actualizarCliente = (nombre,email,id) =>{
    return fetch(`https://62faaedbffd7197707f152a5.mockapi.io/user/:id`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({nombre,email})
    })
    .then( (respuesta) => respuesta)
    .catch( (err) => console.log(err));
}

export const clientServices = {
    listaClientes,
 
    
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
}
export const listaServices = {
    
    listaProductos,
    crearCliente,
}
