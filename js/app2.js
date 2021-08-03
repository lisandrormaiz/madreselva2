
/*
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

Productos.push(new Producto("Perfumina 100ml", "100", Number(210), "https://res.cloudinary.com/dfqfzzcxc/image/upload/v1627249279/promo_2_asxbgq.jpg"))
Productos.push(new Producto("Perfumina 250ml", "250", Number(350), "https://res.cloudinary.com/dfqfzzcxc/image/upload/v1627249276/product_2_ig9vac.jpg"))
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
*/
/*
document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'catalogo.json', true);

   

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            res.innerHTML = '';
    for(let item of datos){
    res.innerHTML +=
            `
            <tr>
                <th>${item.prod}</th>
                <th>${item.mililitros}</th>
                <th>${item.precio}</th>
                <th>${item.img}</th>
            </tr>    
            `
    
}

        }
    }

}

*/


window.onload = function () {
    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Perfumina 100 ml',
            precio: 210,
            imagen: 'https://res.cloudinary.com/dfqfzzcxc/image/upload/c_scale,w_248/v1627249279/promo_2_asxbgq.jpg'
        },
        {
            id: 2,
            nombre: 'Perfumina 250 ml',
            precio: 350,
            imagen: 'https://res.cloudinary.com/dfqfzzcxc/image/upload/c_scale,w_248/v1627249276/product_2_ig9vac.jpg'
        },
        {
            id: 3,
            nombre: 'Perfumina 50 ml',
            precio: 450,
            imagen: 'https://res.cloudinary.com/dfqfzzcxc/image/upload/c_scale,w_248/v1627249277/product_4_utnene.jpg'
        }

    ];

    let carrito = [];
    let total = 0;
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');

    // Funciones

    /**
    * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
    */
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('product_image');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = info.precio + '$';
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    /**
    * Evento para añadir un producto al carrito de la compra
    */
    function anyadirProductoAlCarrito(evento) {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Actualizamos el carrito 
        renderizarCarrito();

    }

    /**
    * Dibuja todos los productos guardados en el carrito
    */
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}$`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
    }

    /**
    * Evento para borrar un elemento del carrito
    */
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Calculamos de nuevo el precio
        calcularTotal();
    }

    /**
    * Calcula el precio total teniendo en cuenta los productos repetidos
    */
    function calcularTotal() {
        // Limpiamos precio anterior
        total = 0;
        // Recorremos el array del carrito
        carrito.forEach((item) => {
            // De cada elemento obtenemos su precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            total = total + miItem[0].precio;
        });
        // Renderizamos el precio en el HTML
        DOMtotal.textContent = total.toFixed(2);
    }

    /**
    * Varia el carrito y vuelve a dibujarlo
    */
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        calcularTotal();
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    renderizarProductos()
} 