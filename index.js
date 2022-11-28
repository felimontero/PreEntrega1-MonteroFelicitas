
class Cabaña {
    constructor(id, nombre, precio, imagen, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}


const cabañasDisponibles = []

let cabaña1 = new Cabaña(1, "Los Ceibos", 12500, "./images/ceibos.jpg", "Hasta ocho personas");
cabañasDisponibles.push(cabaña1)
let cabaña2 = new Cabaña(2, "El Rosedal", 6900, "./images/rosedal.jpg", "Hasta tres personas");
cabañasDisponibles.push(cabaña2)
let cabaña3 = new Cabaña(3, "Las Lavandas", 9000, "./images/lavandas.jpg", "Hasta cinco personas");
cabañasDisponibles.push(cabaña3)
let cabaña4 = new Cabaña(4, "Las Violetas", 8500, "./images/violetas.jpg", "Hasta cuatro personas");
cabañasDisponibles.push(cabaña4)
let cabaña5 = new Cabaña(5, "Los Jazmines", 4990, "./images/jazmines.jpg", "Hasta tres personas");
cabañasDisponibles.push(cabaña5)
let cabaña6 = new Cabaña(6, "Las Fresias", 8500, "./images/fresias.jpg", "Hasta cuatro personas");
cabañasDisponibles.push(cabaña6)
let cabaña7 = new Cabaña(7, "Las Margaritas", 2590, "./images/margaritas.jpg", "Hasta dos personas");
cabañasDisponibles.push(cabaña7)
let cabaña8 = new Cabaña(8, "Las Camelias", 7950, "./images/camelias.jpg", "Hasta cuatro personas");
cabañasDisponibles.push(cabaña8)
let cabaña9 = new Cabaña(9, "Las Azaleas", 3990, "./images/azaleas.jpg", "Hasta tres personas");
cabañasDisponibles.push(cabaña9)
let cabaña10 = new Cabaña(10, "Siempre Verde", 11500, "./images/siempreVerde.jpg", "Hasta seis personas");
cabañasDisponibles.push(cabaña10)

const contenedorCabañas = document.getElementById('contenedorCabañas');

cabañasDisponibles.forEach((cabañas) => {
    const divProductos = document.createElement("div");
    divProductos.className = "tarjetasCabañas";
    divProductos.innerHTML = `
    <div class= "datosTarjetas">
    <div class="card-body">
    <img src="${cabañas.imagen}" class= "imagenesCabañas"/>
                <p class="card-title">${cabañas.nombre}</p>
                <p class="card-text-precio">${cabañas.precio}</p>
                <p class= "card-text-descripcion">${cabañas.descripcion}</p>
                <button type="Button" id="boton-${cabañas.id}" class= "boton">Escoger cabaña</button>
            </div>
        </div>
        `
    contenedorCabañas.appendChild(divProductos);

    const boton = document.getElementById(`boton-${cabañas.id}`);
    boton.addEventListener("click", () => {
        agregarAlCarrito(cabañas.id);
        console.log(cabañas.id);
    });
});


const carrito = JSON.parse(localStorage.getItem('carrito')) || []
const contenedorCarrito = document.getElementById('contenedorCarrito')
const contador = document.getElementById('contador')


const contadorCarrito = () => {
    contador.style.display = 'block'
    contador.innerText = carrito.length
}

const agregarAlCarrito = (id) => {
    const cabañas = cabañasDisponibles.find((cabañas) => cabañas.id === id)
    const CabañaSeleccionada = carrito.find((cabañas) => cabañas.id === id)
    if (CabañaSeleccionada) {
        CabañaSeleccionada.precio++
    } else {
        carrito.push(cabañas)
    }
    updateCarrito();
    contadorCarrito();
}

function updateCarrito() {
    let update = ''
    carrito.forEach((cabañas) => {
        update += `
        <div class="contenidoDelCarrito">
        <h3 class="itemCarritoTitulo"> ${cabañas.nombre} </h3>
        <p class="itemCarrito">$${cabañas.precio}</p>
        <button onClick = "borrarDelCarrito(${cabañas.id})" class="boton">Eliminar</button>
        </div>`
    })

    contenedorCarrito.innerHTML = update
    calcularTotalEstadia();
}


const borrarDelCarrito = (id) => {
    const cabañas = carrito.find((cabañas) => cabañas.id === id)
    carrito.splice(carrito.indexOf(cabañas), 1)
    updateCarrito();
    contadorCarrito();
}

const vaciarCarrito = document.getElementById('vaciarCarrito')
vaciarCarrito.addEventListener('click', () => {
    carrito.splice(0, carrito.length)
    updateCarrito();
    contadorCarrito();
})

const totalEstadia = document.getElementById('totalEstadia')
const finalizar = document.getElementById('finalizarCompra')

const calcularTotalEstadia = () => {
    let total = 0
    carrito.forEach((cabañas) => {
        total += cabañas.id + cabañas.precio
    })
    totalEstadia.innerHTML = total;

    if (total !== 0) {
        finalizar.addEventListener('click', calcularTotalEstadia)
    }
    console.log(calcularTotalEstadia)
}

//agregar carrito a storage
localStorage.setItem('carrito', JSON.stringify(carrito))


const nombre = document.getElementById("inputNombre")
const apellido = document.getElementById("inputApellido")
const loguin = document.getElementById("loguin")
const bienvenido = document.getElementById("bienvenido")



const botonCliente = document.getElementById("boton")
botonCliente.onclick = () => {
    const datos =  {
        nombre: nombre.value,
        apellido: apellido.value
    }
    localStorage.setItem("datos", JSON.stringify(datos))
    loguin.remove()
    const saludo = document.createElement ("h2")
    saludo.innerText = `Bienvenido ${datos.nombre} ${datos.apellido}`
    bienvenido.append(saludo)
    
}
