//TIPOS de REQUIRES
//const fs = require('fs');
// DE UN PROYECTO PROPIO DE NODE
//const fs = require('express');
// NO ES UNA LIBRERIA PROPIA DE NODE
//const fs = require('./fs');
// DE LOS QUE CREAMOS NOSOTROS

//// requires
// const fs = require('fs');

//const multiplicar = require('./multiplicar/multiplicar');
//console.log(multiplicar);

//DESTRUCTURACION
const {crearArchivo} = require('./multiplicar/multiplicar');

let base = '8';


// let data = '';
// let fileName = `tabla-${base}.txt`;
//
// // 2 * 1 = 2
// // 2 * 2 = 4
// // 2 * 3 = 6
// // ...
// // 2 * 10 = 20
//
// for (let i=1; i<=10; i++){
//     data += `${base} * ${i} = ${base*i}\n`;
// }
//
// fs.writeFile(`./tablas/${fileName}`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo ${fileName} ha sido creado`);
// });


crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));

