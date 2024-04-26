//------------------------------- CASO1
const cost_hindebrando = 2500000;

// var products_medellin = {
//     almojábana_con_gaseosa: 15000,
//     subway_con_gaseosa: 23000,
// }

// const compra_medellin = prompt("que desea solicitar hindebrando? \n1-almojábana con gaseosa \n2-subway con gaseosa \n3-No compra nada");

// switch (compra_medellin) {
//     case "1" : {
        
//         total_cost =cost_hindebrando - products_medellin.almojábana_con_gaseosa;
//         console.log("su compra fue una almojábana con gaseosa");
//         console.log(`su total actual es de ${total_gasto}`);
//         break;
//     }
//     case "2" : {
        
//         total_cost =cost_hindebrando - products_medellin.subway_con_gaseosa;
//         console.log("su compra fue una almojábana con gaseosa");
//         console.log(`su total actual es de ${total_gasto}`);
//         break;
//     }
//     case "3" : {
//         console.log("Gracias vuelva pronto ");
//         break;
//     }

// }
//---------------------------------------------
//------------------------------- CASO2
//tamaño maleta aeropuesto
// const  height_bag_airpot = 55 ;
// const  large_bag_airpot = 40 ;
// const width_bag_airpot = 20 ;
// //tamaño maleta cliente
// const height_bag = 60;
// const large_bag = 40;
// const width_bag = 20;
// // factor de reduccion entre maletas
// const reduction_height = height_bag_airpot/height_bag;
// console.log(reduction_height);
// const reduction_large = large_bag_airpot/large_bag;
// console.log(reduction_large);
// const reduction_width =width_bag_airpot/width_bag;
// console.log(reduction_width);
// //math min 
// const math_reduction = Math.min (reduction_height,reduction_large,reduction_width);
// console.log(math_reduction);
// // nuevas dimesiones

// const new_height = height_bag*math_reduction ;
// console.log("nuevas dimensiones bag height "+new_height);
// const new_large = large_bag*math_reduction ;
// console.log("nuevas dimensiones bag large "+new_large);
// const new_width = width_bag*math_reduction ;
// console.log("nuevas dimensiones bag width "+new_width);
//-------------------------------------------------------
 //------------------------------- CASO3


// function binary_to_decimal (array_binary.length) {
// let string_pass = "";
// let passcode = "";

// const password = "01110010_01101001_01110111_01101001";
// const split_password = password.split("_");

// split_password.forEach( i => {
//     passcode=parseInt(i,2);
//     string_pass = string_pass + String.fromCharCode(passcode);
//     console.log(string_pass);
// });
//----------------------------------------------------
 //------------------------------- CASO4

// const text_taxi = "Taxi me puede llevar al hotel mariposas amarillas";
// const word_phrase_taxi = text_taxi.split("");

// for ( let i = 0 ; i < word_phrase_taxi.length; i++) {
//     const convert_vowels = word_phrase_taxi[i].toLocaleLowerCase();
//     if (convert_vowels === "a"||convert_vowels === "e"||convert_vowels === "o"||convert_vowels === "u" ) { 
//         word_phrase_taxi[i]="i" ;
//     }
// };
// console.log(word_phrase_taxi);
//----------------------------------------------------
//------------------------------- CASO5

// function num_random_taxi(min,max) {
//     return parseInt(Math.random()*(max-min)+min)
// }
// function num_random_hilde(min,max) {
//     return parseInt(Math.random()*(max-min)+min)
// }

// let taxi_driver = num_random_taxi(1,4);
// console.log(`${taxi_driver}`);
// let hilde_client = num_random_hilde(1,4);
// console.log(`${hilde_client}`);

// if (taxi_driver == hilde_client) {
//     console.log(`No paso nada `);
    
// }else if (taxi_driver > hilde_client) {
//     cost_taxi = cost_hindebrando-300000 ;
//     console.log(`Hildebrando paga 300.000 su salgo actual es ${cost_taxi}`);
// }else { 
//     console.log(`No se cobra nada`);
// }
//-----------------------------------------------------
//------------------------------- CASO6


let live_hildebrando = true ;
let count_days = 0;


let color_selection= prompt("cual color corresponde hoy? \n1-Amarillo \n2-Verde \n3-Rojo \n4-Azul");
switch (color_selection) {
        case "1" : {
            let pool_selection = prompt("que desea hacer? \n1-ir a la piscina \n2-meterse a la piscina \n3-no hacer nada");
            switch (pool_selection) {
                case "1":
                    console.log(" el agua huele raro, pero no le pone importancia");
                    break;
                case "2":
                    console.log("empieza a sentirse ahogado, demasiado cloro, muere (terminan las vacaciones");
                    break;
                case "3":
                    console.log("No pada nada");
                    console.log(`${count_days} dia`);
                    break;
            }
            if (pool_selection == 2 ) {
                live_hildebrando = false;
                break;
            }
            count_days = count_days + 1;
            break;
        }
        case "2" : {
            let walk_selection = prompt("va a la caminata ,que desea hacer en la caminata? \n1-hacer toda la caminata \n2-Se devuelve antes");
            switch (walk_selection) {
                case "1":
                    console.log("ira a una hermosa cascada y se tomara fotos");
                   
                    break;
                case "2":
                    console.log("llegará a cierto punto, y se devolverá solo, y den noche se pierde");
                    live_hildebrando = "?"
                    break;
                }
            count_days = count_days + 1;
            break;
        }
        case "3": {
            let peach_selection = prompt("que desea hacer \n1-Voleibol \n2-nadar en el mar \n3-Tomar licor de dudosa procedencia")
            switch (peach_selection) {
                case "1":
                    console.log("juega y la pasa genial");
                    
                    break;
                case "2":
                    console.log("nada en el mar, y monta moto");
                    
                    break;
                case "3":
                    console.log("se pone a tomar cocteles mientras descansa, de pronto siente un fuerte dolor de cabeza y empieza a perder la visión, chirrinchi adulterado, se tiene que devolver de emergencia. (terminan las vacaciones)");
                    live_hildebrando = "?"
                    
                    break;
            }
            count_days = count_days + 1;
            break;
        }

        case "4" : {
            let hotel_selection = prompt("que desea hacer \n1-Jugar Bingo. \n2-ir a bailar. \n3-ir al casino.");
            switch (hotel_selection) {
                case "1":
                    console.log("se lo gana y aumenta su dinero");
                    break;
                case "2":
                    console.log("la pasa muy bien");
                    break;
                case "3":
                    console.log("");
                    break;
            }
            count_days = count_days + 1;
            break;
        }
}

if (live_hildebrando === true ) {
    live_text_hildebrando = "Vivo";
} else if (live_hildebrando == "?") {
    live_text_hildebrando = "en cualquier lugar , no se sabemos si esta vivo o muerto";
}else {
    live_text_hildebrando = "Muerto";
}
alert(`${count_days} dia`);
console.log(`hindebrando esta ${live_text_hildebrando}`);



// if (color_selection = 1) {
    
// }