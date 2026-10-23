const primerForm = document.querySelector("#form-1");
const segundoForm = document.querySelector("#form-2");
const tercerForm = document.querySelector("#form-3");
const ultimoForm = document.querySelector("#form-4");

const inputUsuario = document.querySelector("#input-usuario");
const inputEmail = document.querySelector("#input-email");
const inputContr = document.querySelector("#input-contraseña");

const btnSiguiente = document.querySelector("#btn-siguiente");

const usuario = inputUsuario;
const email = inputEmail;
const contraseña = inputContr;



btnSiguiente.addEventListener("click", function (event) {

    primerForm.classList.add("hide")
    segundoForm.classList.remove("hide")
    
    segundoForm.classList.add("hide")
    tercerForm.classList.remove("hide")
    
    tercerForm.classList.add("hide")
    ultimoForm.classList.remove("hide")
})










