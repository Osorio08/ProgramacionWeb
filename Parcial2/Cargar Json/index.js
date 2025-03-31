//Hacer script de consola para leer e imprimir el nombre del lenguaje y sus usos.
const fs = require('fs');
const path = require('path');

const ruta = path.join(__dirname, '_lenguajes.json');
let cadenaTxt = fs.readFileSync(ruta, 'utf-8');
let objetoJs = JSON.parse(cadenaTxt);

objetoJs.lenguajes_de_programacion.forEach(lenguaje => {
    console.log(`Lenguaje: ${lenguaje.nombre}`);
    console.log(`Usos: ${lenguaje.usos.join(', ')}`);
    console.log('--------------------------------------------------------------------------------------------------------');
});


