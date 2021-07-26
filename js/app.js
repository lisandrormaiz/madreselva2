//Selecciono elementos HTML y lo guardo como constante
const nombre = document.querySelector('.nombre');
const email = document.querySelector('.email');
const mensaje = document.querySelector('.mensaje');
const review_form_button = document.querySelector('.review_form_button');

class Producto {
    constructor(prod, mililitros, precio, img){
    this.prod = prod
    this.mililitros = mililitros
    this.precio = precio
    this.img = img
}

envio() {
    let costoEnvio = this.precio * 0.1
    return costoEnvio
}

}

const Productos = []

//creo productos mediante push//

Productos.push(new Producto("Perfumina 100ml", "50", Number(210), "https://res.cloudinary.com/dfqfzzcxc/image/upload/v1627249279/promo_2_asxbgq.jpg"))
Productos.push(new Producto("Perfumina 250ml", "100", Number(350), "https://res.cloudinary.com/dfqfzzcxc/image/upload/v1627249276/product_2_ig9vac.jpg"))
Productos.push(new Producto("Difusor 50ml", "50", Number(400), "https://res.cloudinary.com/dfqfzzcxc/image/upload/v1627249277/product_4_utnene.jpg"))


//local storage//

function saveLocal(){
    let aJson = JSON.stringify(Productos)
    localStorage.setItem("productos", aJson)
}


saveLocal()

//se agrega un título con getElementById//

const body = document.body
let resultado = document.getElementById("resultado")
let titulo = document.createElement("h1")
titulo.setAttribute("class", "text-center mt-5")
body.prepend(titulo)

titulo.textContent= "Productos actualmente en stock"

//se agrega el listado de productos con js//

function card() {
    let idImprimir = document.getElementById("cardsId")
Productos.forEach(e => {
    idImprimir.innerHTML += `
    <div class="col-lg-4 product_col">
                <div class="card">
                  <div class="gallery_image">
                    <img src=${e.img} class="card-img-top">
                    <h5 class="card-title">${e.prod}</h5>
                    <p class="card-text">${e.precio}</p>
                  </div>
            </div>
    `
})
}

card()


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
