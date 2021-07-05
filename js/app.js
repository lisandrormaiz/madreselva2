class Producto {
    constructor(nombre, mililitros, precio){
    this.nombre = nombre
    this.mililitros = mililitros
    this.precio = precio
}

envio() {
    let costoEnvio = this.precio * 0.1
    return costoEnvio
}

cuotas(cantidad){
    if (this.precio == Number) {
        let resultado = this.precio / cantidad
        return resultado
    } 
    else {
        return "Ingrese un número válido"
    }
}

mostrar () {
    alert(`${this.nombre} de ${this.mililitros} ml vale ${this.precio}`)
}

}

const perfumina50 = new Producto("Perfumina", "50", Number(210));
const perfumina100 = new Producto("Perfumina", "100", Number(350));
const difusor100 = new Producto("Difusor", "100", Number(400));

//creo un array de productos//

let listaDeProductos = ["Perfumina de 50ml", " Perfumina de 100ml", " y Difusor de 100ml"]

let usuario = prompt(`Hola! Cómo te llamas?`)

let consulta = confirm ("Querés saber qué productos tenemos disponibles?")
if (consulta == true) {
    alert(`${usuario}! Este es el listado de productos disponibles: ${listaDeProductos}`)
}
else {
    alert(`${usuario}! De todas formas podés navegar la página para conocer todos nuestros productos`)
}

let masVendido = listaDeProductos.slice(1,2)

let consVend= confirm ("Querés saber cuál es el producto que más nos piden?")
if (consVend == true) {
    alert(masVendido)
}
else {
    alert(`No has querido ver el producto más vendido, igualmente te recomendamos nuestra perfmina de 100ml`)
}

let  envio = confirm ("Querés saber el costo con el envío?")

if(envio == true) {
    alert(`El costo de envío de la perfumina de 50 ml es de ${perfumina50.envio()} pesos, el de la perfumina de 100 ml es de ${perfumina100.envio()}  pesos y el del difusor de 100 ml es de ${difusor100.envio()} pesos`)
       
}else{
    alert(`Ok ${usuario} cualquier duda contactate con nosotros a través de nuestras redes`)
}

let compra = confirm (`Querés comprar algún producto?`)
if (compra == true) {
    alert(`Muchas gracias por tu interés en los productos de MS. ${usuario} mandanos un whatsapp haciendo click en link que figura abajo de esta página indicando tu pedido`)
}
else {
    alert(`Gracias por su visita! Te esperamos de nuevo ${usuario}`)
}
