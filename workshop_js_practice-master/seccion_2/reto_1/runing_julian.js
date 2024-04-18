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



let  listDays = [];
let countDays =0;
let menuClima =  confirm(`¿ esta lloviendo el dia de hoy ?`)

while(menuClima === true){
    let menuDay = prompt(`¿como siente sus niveles de energia hoy "alto" , "medio" , "bajo" o ver "registros"?`)
    if(menuDay === "alto"){
        alert (`su nivel de energia es "alto" ,puede salir a correr `)
        countDays+=1 ;
        listDays.push(menuDay);
    }else if (menuDay === "medio" ) {
        alert (`su nivel de energia es "medio"  ,puede salir a correr `)
        countDays+=1 ;
        listDays.push(menuDay);
    } else if (menuDay === "bajo"){
        alert (`su nivel de energia es "bajo" ,No puedes correr `)
        countDays+=0 ;
        listDays.push(menuDay);
    }else if (menuDay === "registros"){
        alert (`estos son sus registros ${listDays}`)
        break
    }else {
        break
        
    }
}


