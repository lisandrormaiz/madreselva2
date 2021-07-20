//Seleccionamos los elementos HTML y los guardamos en constantes
//const nombre = document.querySelector('.nombre');
//const email = document.querySelector('.email');
//const mensaje = document.querySelector('.mensaje');
//const review_form_button = document.querySelector('.review_form_button');
//const divListaContactos = document.querySelector('.lista-contactos');

//Guardar el local storage en una constante
//const db = window.localStorage;

//Escuchamos los eventos y les asignamos la función correspondiente
//review_form_button.onclick = ()=> {
  //  const contacto = {
   //     id: Math.random(1, 100),
    //    nombre: nombre.value,
    //    email: email.value,
  //      mensaje: mensaje.value
 //   }
  //  guardarContacto(db, contacto);
//}

//Cargamos los contactos
//const cargarContactos = (db, divListaContactos);

//
//entidades
class Usuario {
    constructor(nombre, email, telefono, mensaje, id){
        this.nombre= nombre;
        this.email= email;
        this.telefono = telefono;
        this.mensaje = mensaje;
        this.id = id
    }
}
//variables

//array
let usuarios = []

//selectores

let btnEnviar = document.getElementById("enviar")
let tabla = document.getElementById("tabla")

// funciones

function guardarDatos() {
   
    let nombre = document.getElementById("nombre").value
    let email = document.getElementById("email").value
    let telefono = document.getElementById("telefono").value
    let mensaje = document.getElementById("mensaje").value

    let paso1 = JSON.parse(localStorage.getItem("usuarios"))

    if(localStorage.getItem("usuarios") != null) {
        let index = paso1.length + 1
        let usuario = new Usuario(nombre, email, telefono, mensaje, index)
        paso1.push(usuario)
        localStorage.setItem("usuarios", JSON.stringify(paso1))
    } else {

        localStorage.clear()
        let index = 1
        let usuario = new Usuario(nombre, email, telefono, mensaje, index)
        usuarios.push(usuario)
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
    }
    
}

function imprimirDatos() {
let imprimir = JSON.parse(localStorage.getItem("usuarios"))

if(imprimir != null) {

imprimir.forEach(element => {
    tabla.innerHTML += `
    <tr>
	<td class="col-1">${imprimir.indexOf(element)}</td>
	<th class="col-2">${element.nombre}</th>
	<th class="col-2">${element.email}</th>
	<th class="col-2">${element.telefono}</th>
	<th class="col-2">${element.mensaje}</th>
	<td class="col-2"><button onclick="borrarDatos(${element.id})">X</button></td>
</tr>    
    `

 
});
}
else {
    console.log("array nulo")
}
}

function borrarDatos(id) {
    let borrar = JSON.parse(localStorage.getItem("usuarios"))
    let actualizado = borrar.filter(e => e.id != id)
    localStorage.setItem("usuarios", JSON.stringify(actualizado))
    location.reload()
}

//eventos

btnEnviar.addEventListener("click", guardarDatos)


//lógica
imprimirDatos()
