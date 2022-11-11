
function presentacionUsuario(x) {
    alert(`Bienvenido ${x} a la pagina oficial de las Cabañas Jardin Serrano`)
    return alert
}

let usuario = prompt('Ingresa tu nombre')
presentacionUsuario(usuario)


let cabañaElegida = parseInt(prompt('Escoge la cabaña que quieras reservar: 1.Los Ceibos - 2.El Rosedal - 3.Las Lavandas - 4. Las violetas - 5.Los jazmines'))

let totalEstadia = 0
let seguirViendo = true
let decision

//array
const cabañasDisponibles = []

class Cabaña {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const Ceibos = new Cabaña(1, 12500)
cabañasDisponibles.push(Ceibos)
const Rosedal = new Cabaña(2, 6900)
cabañasDisponibles.push(Rosedal)
const Lavandas = new Cabaña(3, 9000)
cabañasDisponibles.push(Lavandas)
const violetas = new Cabaña(4, 8500)
cabañasDisponibles.push(violetas)
const jazmines = new Cabaña(5, 5990)
cabañasDisponibles.push(jazmines)


while (seguirViendo === true) {

    const cabañaCliente = cabañasDisponibles.find(cabaña => cabaña.nombre === cabañaElegida)
    if (cabañaCliente) {
        totalEstadia = totalEstadia + cabañaCliente.precio
    } else {
        cabañaElegida = parseInt(prompt('Escoge una cabaña disponible: 1.Los Ceibos - 2.El Rosedal - 3.Las Lavandas - 4. Las violetas - 5.Los jazmines'))
        continue
    }
    console.log(cabañaCliente)


    
    // if (cabañaElegida === 1) {
    //     totalEstadia = totalEstadia + Ceibos.precio
    // } else if (cabañaElegida === 2) {
    //     totalEstadia = totalEstadia + Rosedal.precio
    // } else if (cabañaElegida === 3) {
    //     totalEstadia = totalEstadia + Lavandas.precio
    // } else if (cabañaElegida === 4) {
    //     totalEstadia = totalEstadia + violetas.precio
    // } else if (cabañaElegida === 5) {
    //     totalEstadia = totalEstadia + jazmines.precio
    // } else {
    //     cabaña = parseInt(prompt('Escoge una cabaña disponible: 1.Los Ceibos - 2.El Rosedal - 3.Las Lavandas - 4. Las violetas - 5.Los jazmines'))
    //     continue
    // }


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


