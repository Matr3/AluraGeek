//Fetch API
const listaClientes = () =>{
    return fetch("http://localhost:3000/perfil").then(respuesta =>{
        return respuesta.json();
    });
};
const listaProductos = () =>{
    return fetch("http://localhost:3000/prod").then(respuesta =>{
        return respuesta.json();
    });
};

const crearCliente = (imagen, categoria, nombre_prod, precio_prod, descripcion_prod) => {
    return fetch("http://localhost:3000/prod", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({imagen, categoria, nombre_prod, precio_prod, descripcion_prod}),
    })
}

const eliminarCliente = (id) =>{
    console.log("eliminar a", id)
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
    })
}

const detalleCliente = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`)
    .then( (respuesta) => respuesta.json())
}

const actualizarCliente = (nombre,email,id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`,{
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