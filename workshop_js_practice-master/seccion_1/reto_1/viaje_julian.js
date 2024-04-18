const travel= {
    destino:["haiti","valledupar","choco","buenojaires", "cucuta"] ,
    dias:0 ,
    costo:0 ,
};

let days = prompt("porfavor ingresa el numero de dias ")
travel.dias = days;
let cost = prompt("porfavor ingresa el costo a pagar")
travel.costo =cost;
let selecttravel = prompt("escoje el lugar ,haiti,valledupar,choco,buenojaires, cucuta" )

const valueTravel = () => {
    if (travel.destino.includes(selecttravel)){
        console.log("tu lugar es ", selecttravel)
    } else {
        console.log("este destino no se encuentra ")
    }
}

valueTravel()

