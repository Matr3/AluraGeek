//Fetch API
const listaClientes = () =>{
    return fetch("https://my-json-server.typicode.com/Matr3/AluraGeek/perfil").then(respuesta =>{
        return respuesta.json();
    });
};
const listaProductos = () =>{
    return fetch("https://my-json-server.typicode.com/Matr3/AluraGeek/prod").then(respuesta =>{
        return respuesta.json();
    });
};

const crearCliente = (imagen, categoria, nombre_prod, precio_prod, descripcion_prod) => {
    return fetch(("https://my-json-server.typicode.com/Matr3/AluraGeek/prod"),{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
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
    return fetch(`https://my-json-server.typicode.com/Matr3/AluraGeek/perfil/${id}`, {
        method: "DELETE"
    })
}

const detalleCliente = (id) =>{
    return fetch(`https://my-json-server.typicode.com/Matr3/AluraGeek/perfil/${id}`)
    .then( (respuesta) => respuesta.json())
}

const actualizarCliente = (nombre,email,id) =>{
    return fetch(`https://my-json-server.typicode.com/Matr3/AluraGeek/perfil/${id}`,{
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
