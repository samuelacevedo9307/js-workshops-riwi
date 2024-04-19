//- Requerimientos del Programa:
// - Gestión de souvenirs:
// - El programa debe permitir a Julian introducir diversos souvenirs con sus respectivos detalles. Julian quiere poder ingresar el nombre del souvenir, cuánto cuesta y si está disponible en ese momento o no.
// - Representación de Datos:
// - Cada aspecto del souvenir (nombre, costo, disponibilidad) debe ser representado por un tipo de dato adecuado:
//     - El nombre debe ser una cadena de texto.
//     - El costo debe ser un número que pueda incluir decimales.
//     - La disponibilidad debe ser un valor booleano que indique si el souvenir puede ser comprado (true) o no (false).
// - Verificación de Tipos de Datos:
// - Julian quiere asegurarse de que los tipos de datos sean correctos para evitar errores al calcular costos o al mostrar la disponibilidad de los souvenirs. El programa debe incluir una función que verifique el tipo de cada dato ingresado usando typeof y 
//que informe si los tipos son los esperados.



let  listSourvenir = [];

function crearsouvenir(nombre, costo, disponible) {
    const souvenir = {
        nombre_souvenir: nombre,
        costo_souvenir: costo,
        disponibilidad: disponible,
    };
    listSourvenir.push(souvenir);
}

while(true){
    let menu = confirm("¿Desea ingresar un souvenir...?")
    if(menu === true){
        let nameSouvenir = prompt("ingrese nombre souvenir");
        let nameCost = prompt("ingrese costo del souvernir");
        let nameDisp = prompt (`ingrese si esta "disponible" o "no disponible"`)
        
        if (nameDisp === "disponible"){
            nameDisp = true;
        }else {
            break;
        }
        if(typeof nameSouvenir === "string" &&  typeof nameCost === Number && typeof nameDisp === true ) {
            console.log( `su nombre , costo y disponibilidad ha sido aceptado` )
            crearsouvenir(nameSouvenir, nameCost,nameDisp );
            console.log( listSourvenir);
        }else {
            alert(`revisa si el souvernir esta disponible o algun caracter no corresponde  como texto o numero , vuelve nuevamente`);
        }
        
    }
    else{
        alert("hasta pronto");
        break
        
    }

}



// while (typeof souvenir.nombre) {
//     if (typeof souvenir.nombre === "string") {
//         listSourvenir.push (nameSouvenir);
//         souvenir.nombre = nameSouvenir;
//         console.log( `su nombre ha sido aceptado` )
//         break
//         } else {
//         console.log(" el caracter ingresado no es correcto , ingrese nuevamente");
//     }
// }


// while (typeof souvenir.costo){
//     if (typeof souvenir.costo === "number") {
//         listSourvenir.push (nameCost);
//         souvenir.costo = nameCost;
//         console.log( `su costo ha sido aceptado` )
//         break
//         } else {
//         console.log(" el caracter ingresado no es correcto , ingrese nuevamente");
//     }
// }

// console.log(listSourvenir);
// console.log(souvenir);