let colores = ["Rojo","Blanco","Negro"];

let colorRojo = colores[0];
let colorBlanco = colores[1];
let colorNegro = colores[2];

let [ rojo, river, plate ] = colores  //Estos 2 ultimos nombres, retornará el color en su posicion correspondiente.

/* Aplicado a Objetos Literales */

let consecionaria = {
    marca : "volkswagen",
    modelo : "suran",
    precio : 1500000, 
    km : 98000,
    color : "champagne",
    anio : 2015,
    patente : "PED 912",
    vendido : true,
}

let {color,km,vendido } = consecionaria; 

console.log(color,km,vendido);

