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

const presupuesto = 1000;
let countAhorrro = 0;
let list_cost_days = [];
let costos = {
    comida: 0,
    compras: 0,
    ahorro: 50,
};

let menu_cost_pay = confirm("¿Desea ingresar los gastos de hoy...?");

while (countAhorrro < presupuesto) {
    let cost_comida = prompt("ingrese gastos de comidas hoy ");
    let cost_libros = prompt("ingrese gastos de libros hoy ");
    countAhorrro = presupuesto - 50;
    costos.ahorro = countAhorrro;
    while ((cost_comida + cost_libros) < presupuesto) {

        if (typeof cost_comida === Number && cost_comida < presupuesto) {
            cost_comida = presupuesto - cost_comida;
            costos.comida = cost_comida;

        } else if (typeof cost_libros === Number && cost_libros < presupuestoesto) {
            cost_libros = presupuesto - cost_libros;
            costos.compras = cost_libros;
            list_cost_days.push(cost_libros);
        } else {
            break
        }
    }
}



