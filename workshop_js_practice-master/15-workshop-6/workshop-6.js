
    // // Global Scope
    // var globalVariable = "Soy una variable global.";

    // function testScope() {
    //   // Function Scope
    //   var functionVariable = "Soy una variable local.";

    //   if (true) {
    //     // Block Scope
    //     let blockVariable = "Soy una variable de bloque.";
    //     console.log("Dentro del bloque:", blockVariable);
    //   }

    //   console.log("Dentro de la función:", functionVariable);
    // }

    // console.log("Fuera de la función:", globalVariable);
    // testScope();
//-------------------------EJERCICIO 1---------------------------------


// var globalVariable = "Soy una variable global.";
// //La variable llamada global tiene un ámbito global y por eso puede ser utilizada e incluso modificada dentro de la función
//     function testScope() {
//       // Function Scope
//       var functionVariable = "Soy una variable local.";
// //Solo se puede acceder a ellos desde dentro de la función.
//       if (true) {
//         // Block Scope
//         let blockVariable = "Soy una variable de bloque.";
//         console.log("Dentro del bloque:", blockVariable);
//       }
// //Una sentencia block se utiliza para agrupar cero o más sentencias. Este grupo block se delimita por un par de llaves.
//       console.log("Dentro de la función:", functionVariable);
//     }
//     console.log("Fuera de la función:", globalVariable);
//     testScope();

// var selection_var = prompt ("las variables globales son:  \n-1 tiene un ámbito global y por eso puede ser utilizada e incluso modificada dentro de la función\n-2 se utiliza para agrupar cero o más sentencias. Este grupo block se delimita por un par de llaves.");

// switch (selection_var) {
//     case "1":
//         alert("es correcto")
//         break;
//     case "2":
//         alert("falso , intentalo nuevamente")
//         break;
// }
// var selection_block =  prompt("las variables de bloque son  \n-1 se utiliza para agrupar cero o más sentencias. Este grupo block se delimita por un par de llaves. \n-2 Solo se puede acceder a ellos desde dentro de la función. ");
// switch (selection_block) {
//     case "1":
//         alert("es correcto")
//         break;
//     case "2":
//         alert("falso ,abrace")
//         break;
// }

// var selection_local =  prompt("las variables de bloque son  \n-1 Solo se puede acceder a ellos desde dentro de la función. \n-2 tiene un ámbito global y por eso puede ser utilizada e incluso modificada dentro de la función");
// switch (selection_local) {
//     case "1":
//         alert("es correcto")
//         break;
//     case "2":
//         alert("falso , intentalo nuevamente")
//         break;
// }
//------------------------------EJERCICIO 2----------------------------
    // // vars declaration
    // var a = 1;
    // let b = 2;
    // const c = 3;

    // // functions declarations
    // function funcionDeclarada() {
    //   return "Función declarada ha sido llamada.";
    // }

    // const funcionExpresada = function () {
    //   return "Función expresada ha sido llamada.";
    // };

    // // vars call
    // console.log("Valor de a:", a);
    // console.log("Valor de b:", b);
    // console.log("Valor de c:", c);

    // // functions call
    // console.log("Resultado de funcionDeclarada:", funcionDeclarada());
    // console.log("Resultado de funcionExpresada:", funcionExpresada());



    // variable en bloque 
    // comportamiento hosting
    // funciones declaradas y expresadas 
    // que son clousures
    //

const selection_local = prompt(`el codigo mostrado en la pantalla es : \n1-Es correcto \n2-es incorrecto `);
        
switch (selection_local) {
    case "1":
        alert("no hay ningun tipo de error y toda la funcion se muestra resultado")
        break;
    case "2":
        alert("hey errores evidentes en el codigo ")
        const selection_second_local = prompt(`cuales errores notaste \n1-las variables declaradas con var son inicializadas con undefined, mientras que las variables con let y const no pueden ser accedidas antes de su declaración. \n2- las variables declaradas con var NO son inicializadas con undefined, mientras que las variables con let y const pueden ser accedidas antes de su declaración.`);
        switch (selection_local) {
            case "1":
                alert (`es correcto , felicidades.`)
                
                break;
            case "2":
                alert (`es incorrecto Bruto de mierda , lea un libro , que pesar de su mama .`)
                
                break;
        
            default:
                break;
        }
        break;
}

    // // vars call
    // console.log("Valor de a:", a);
    // console.log("Valor de b:", b);
    // console.log("Valor de c:", c);

    // // functions call
    // console.log("Resultado de funcionDeclarada:", funcionDeclarada());
    // console.log("Resultado de funcionExpresada:", funcionExpresada());

    // // vars declaration
    // var a = 1;
    // let b = 2;
    // const c = 3;

    // // functions declarations
    // function funcionDeclarada() {
    //   return "Función declarada ha sido llamada.";
    // }

    // const funcionExpresada = function () {
    //   return "Función expresada ha sido llamada.";
    // };
    

    //-------------------------------Ejercicio 3: Closures en Acción---------------------------