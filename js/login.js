import { clientServices } from "../service/client-service.js";


const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const email = document.querySelector("[data-tipo=email]").value;
    const password = document.querySelector("[data-tipo=password]").value;

    const user = usuarios;

        for(let i = 0; i < user.length; i++){
            
            if(user[i].email == email && user[i].password == password){
                window.location.href = "./productos.html";
                break;
            }else{
                document.querySelector(".input-login-error").style.display = "block";
            }
        }
    })


