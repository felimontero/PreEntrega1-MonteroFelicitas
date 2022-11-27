

// function presentacionUsuario(x) {
//     alert(`Bienvenido ${x} a la pagina oficial de las Cabañas Jardin Serrano`)
//     return alert
// }

// let usuario = prompt('Ingresa tu nombre')
// presentacionUsuario(usuario)


// let cabañaElegida = parseInt(prompt('Escoge la cabaña que quieras reservar: 1.Los Ceibos - 2.El Rosedal - 3.Las Lavandas - 4. Las violetas - 5.Los jazmines'))

// let totalEstadia = 0
// let seguirViendo = true
// let decision

//array

class Cabaña {
    constructor(id, nombre, precio, imagen, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}


// const divProductos = document.getElementById('divProductos')
// divProductos.className = 'tarjetasCabañas'
// cabañasDisponibles.forEach(cabaña => {
//     divProductos.innerHTML += `

// })

// const selectCaba = document.getElementById('lista')
// const botonAgregar = document.getElementById('agregar')

// cabañasDisponibles.forEach((cabaña) => {
//     const optionCaba = document.createElement('option')
//     optionCaba.innerText = `${cabaña.nombre}: ${cabaña.precio}`
//     selectCaba.append(optionCaba)
// })

//carrito de compra 

const cabañasDisponibles = [];

let cabaña1 = new Cabaña(1, "Ceibos", 12500, "./images/ceibos.jpg", "Los Ceibos, hasta ocho personas");
cabañasDisponibles.push(cabaña1)
let cabaña2 = new Cabaña(2, "Rosedal", 6900, "./images/rosedal.jpg", "El Rosedal, hasta tres personas");
cabañasDisponibles.push(cabaña2)
let cabaña3 = new Cabaña(3, "Lavandas", 9000, "./images/lavandas.jpg", "Las Lavandas, hasta cinco personas");
cabañasDisponibles.push(cabaña3)
let cabaña4 = new Cabaña(4, "Violetas", 8500, "./images/violetas.jpg", "Las Violetas, hasta cuatro personas");
cabañasDisponibles.push(cabaña4)
let cabaña5 = new Cabaña(5, "Jazmines", 5990, "./images/jazmines.jpg", "Los Jazmines, hasta tres personas");
cabañasDisponibles.push(cabaña5)

const contenedorCabañas = document.getElementById ('contenedorCabañas');

cabañasDisponibles.forEach((cabaña) => {
    const divProductos = document.createElement('div')
    divProductos.className = 'tarjetasCabañas'
    divProductos.innerHTML += `
    <div class= "datosTarjetas">
    <div class="card-body">
    <img src="${cabaña.imagen}" class= "imagenesCabañas">
    <h3 class="card-text-precio">${cabaña.id} </h3>
                <p class="card-title">${cabaña.nombre}</p>
                <p class="card-text-precio">${cabaña.precio}</p>
                <p class= "card-text-descripcion">${cabaña.descripcion}</p>
                <button id="boton${cabaña.id}" class= "btn btn-dark">Escoger cabaña</button>
            </div>
        </div>
        `
})

contenedorCabañas.append(divProductos)

const boton = document.getElementById(`boton${cabaña.id}`)

// const divProductos = document.getElementById('divProductos')
// divProductos.className = 'tarjetasCabañas'
// cabañasDisponibles.forEach(cabaña => {
//     divProductos.innerHTML += `
    
// })

// const selectCaba = document.getElementById('lista')
// const botonAgregar = document.getElementById('agregar')

// cabañasDisponibles.forEach((cabaña) => {
//     const optionCaba = document.createElement('option')
//     optionCaba.innerText = `${cabaña.nombre}: ${cabaña.precio}`
//     selectCaba.append(optionCaba)
// })

//carrito de compra 
const carrito = JSON.parse(localStorage.getItem('carrito')) || []
const botonesAgregar = document.querySelectorAll('.btn-primary')

botonesAgregar.forEach(boton => {
    boton.onclick = () => {
        const CabañaSeleccionada = cabañasDisponibles.find(prod => prod.id === parseInt(boton.id))

        const cabañaCarrito = { ...CabañaSeleccionada, cantidad: 1 }

        const indexCarrito = carrito.findIndex(prod => prod.id === cabañaCarrito.id)
        if (indexCarrito === -1) {
            carrito.push(cabañaCarrito)
        } else {
            carrito(indexCarrito).cantidad++
        }

        //agregar carrito a storage
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }
})

//finalizar compra
const botonFinalizar = document.querySelector('#finalizar')
botonFinalizar.onclick = () => {
    const valores = carrito.map(prod => prod.precio * prod.cantidad)
    let totalEstadia = 0
    valores.forEach(valor => {
        totalEstadia += valor
    })
}

// botonAgregar.onclick = () => {
//     const indexCaba = selectCaba.selectedIndex
//     const CabañaSeleccionada = cabañasDisponibles[indexCaba]
//     carrito.push(CabañaSeleccionada)
//     console.log(carrito)
// }


while (seguirViendo === true) {

    const cabañaCliente = cabañasDisponibles.find(cabaña => cabaña.nombre === cabañaElegida)
    if (cabañaCliente) {
        totalEstadia = totalEstadia + cabañaCliente.precio
    } else {
        cabañaElegida = parseInt(prompt('Escoge una cabaña disponible: 1.Los Ceibos - 2.El Rosedal - 3.Las Lavandas - 4. Las violetas - 5.Los jazmines'))
        continue
    }
    console.log(cabañaCliente)


    decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))
    if (decision === 1) {
        cabañaElegida = parseInt(
            prompt(
                'Escoge una cabaña disponible: 1.Los Ceibos - 2.El Rosedal - 3.Las Lavandas - 4. Las violetas - 5.Los jazmines'
            )
        )
    } else {
        seguirViendo = false
    }
}
alert(`El total de tu estadia es ${totalEstadia}`)



function diasEstadia(dias) {

    if (dias === 1) {
        alert(`Tu estadia en la cabaña durara tres dias`)
    } else if (dias === 2) {
        alert(`Tu estadia en la cabaña durara siete dias`)
    } else if (dias === 3) {
        alert(`Tu estadia en la cabaña durara diez dias`)
    }
    return alert
}

let dias = parseInt(prompt('Ingresa la cantidad de dias: 1.Tres dias- 2.Siete dias - 3.Diez dias'))

diasEstadia(dias)

