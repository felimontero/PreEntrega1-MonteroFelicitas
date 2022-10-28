
function presentacionUsuario (x) {
    alert (`Bienvenido ${x} a la pagina oficial de las Cabañas Jardin Serrano`)
    return alert 
}

let usuario = prompt ('Ingresa tu nombre')
presentacionUsuario (usuario)


let cabaña = parseInt(prompt('Escoge la cabaña que quieras reservar: 1.Los Ceibos - 2.El Rosedal - 3.Las Lavandas - 4. Las violetas - 5.Los jazmines'))


let totalEstadia = 0
let seguirViendo = true
let decision

while (seguirViendo === true) {
    if (cabaña === 1) {
        totalEstadia = totalEstadia + 12500 
    } else if (cabaña === 2) {
        totalEstadia = totalEstadia + 6900 
    } else if (cabaña === 3) {
        totalEstadia = totalEstadia + 9000 
    } else if (cabaña === 4) {
        totalEstadia = totalEstadia + 8500 
    } else if (cabaña === 5) {
        totalEstadia = totalEstadia + 5990 
        cabaña = parseInt(prompt('Escoge una cabaña disponible: 1.Los Ceibos - 2.El Rosedal - 3.Las Lavandas - 4. Las violetas - 5.Los jazmines'))
        continue
    }
    

    decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))
    if (decision === 1) {
        cabaña = parseInt(
            prompt(
                'Escoge una cabaña disponible: 1.Los Ceibos - 2.El Rosedal - 3.Las Lavandas - 4. Las violetas - 5.Los jazmines'
            )
        )
    } else {
        seguirViendo = false
    }
}
    alert(`El total de tu estadia es ${totalEstadia}`)






function diasEstadia (Cabaña, f1, f2, f3) {
    let diasEstadia
    
    if (dias = 3) {
        alert (`Tu estadia en la cabaña durara tres dias`)
    } else if (dias = 7) {
        alert (`Tu estadia en la cabaña durara siete dias`)
    } else if (dias = 10) {
        alert (`Tu estadia en la cabaña durara diez dias`)
    }
    }

let dias = parseInt (prompt ('Ingresa la cantidad de dias: 1.Tres dias- 2.Siete dias - 3.Diez dias'))


let Cabaña = parseInt (prompt ('Ingresa el nombre de tu cabaña elegida: 1.Los Ceibos - 2.El Rosedal - 3.Las Lavandas - 4.Las violetas - 5.Los jazmines'))


diasEstadia (Cabaña, dias)
console.log ('cabañaElegida')
