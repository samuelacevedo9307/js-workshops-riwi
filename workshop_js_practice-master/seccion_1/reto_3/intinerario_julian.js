var lista_gastos = [
    sitio = {
        brasil: 2000000,
        francia: 1500000,
        japon: 1000000,
    },
    transporte = {
        avion: 250000,
        bus: 100000,
        barco: 150000,
    },
    comida = {
        hamburguesa: 100000,
        pizza: 150000,
        burrito: 100000,
    },
];

let count_gastos = 0;

let lugar_alojamiento = prompt(`¿A donde desea ir  de nuestro paquete , brasil , francia o japon?`)
while (true) {
    if (lugar_alojamiento == "brasil") {
        console.log(`su costo de alejamiento en brasil es de `);
        count_gastos = lista_gastos[0].brasil + count_gastos;

        break;
    } else if (lugar_alojamiento == "francia") {
        console.log(`su costo de alejamiento en francia es de`);
        count_gastos = lista_gastos[0].francia + count_gastos;
        break;
    } else if (lugar_alojamiento == "japon") {
        console.log(`su costo de alejamiento en francia es de`);
        count_gastos = lista_gastos[0].japon + count_gastos;
        break;
    } else {
        alert("ingrese un valor valido");
        break;
    }
}

let mobile_trans = prompt(`¿que tipo de transporte prefieres? avion , bus , barco`)
while (true) {
    if (mobile_trans == "avion") {
        console.log(`su costo de transporte es  `);
        count_gastos = lista_gastos[1].avion + count_gastos;

        break;
    } else if (mobile_trans == "bus") {
        console.log(`su costo de alejamiento en francia es de`);
        count_gastos = lista_gastos[1].bus + count_gastos;
        break;
    } else if (mobile_trans == "barco") {
        console.log(`su costo de alejamiento en francia es de`);
        count_gastos = lista_gastos[1].barco + count_gastos;
        break;
    } else {
        alert("ingrese palabra valida");
        break;
    }
}

let food = prompt(`¿que comida prefieres hamburguesa, pizza , burrito?`)
while (true) {
    if (food == "hamburguesa") {
        console.log(`su costo de transporte es  `);
        count_gastos = lista_gastos[2].hamburguesa + count_gastos;
        break;
    } else if (food == "pizza") {
        console.log(`su costo de alejamiento en francia es de`);
        count_gastos = lista_gastos[2].pizza + count_gastos;
        break;
    } else if (food == "burrito") {
        console.log(`su costo de alejamiento en francia es de`);
        count_gastos = lista_gastos[2].burrito + count_gastos;
        break;
    } else {
        alert("ingrese palabra valida");
        break;
    }
}

alert(`su lugar es: ${lugar_alojamiento} te transportas en  ${mobile_trans} y su comida sera ${food}`)

let presupuesto = prompt(`cuanto es tu presupuesto para viajar ?`);

if (presupuesto > count_gastos) {
    alert(`su presupuesto es de ${presupuesto} y el costo de viaje es de ${count_gastos}`);
}

// // let presupuesto = prompt(`ingrese el monto de su presupuesto por favor `)
