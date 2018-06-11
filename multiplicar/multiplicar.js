// requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('==============='.green);
    console.log(`tabla de ${base}`.green);
    console.log('==============='.green);
    for (let i=1; i<=limite; i++){
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise( (resolve, reject) =>{

        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';
        //let fileName = `tabla-${base}.txt`;
        let fileName = `tabla-${base}-al-${limite}.txt`;

        for (let i=1; i<=limite; i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`./tablas/${fileName}`, data, (err) => {
            if (err) reject(err);
            else
                resolve(fileName);
        });
    })
}

//MEJOR OPCION
//Creo un objeto con un atributo crearArchivo cuyo valor es la funcion crearArchivo
module.exports = {
    crearArchivo,
    listarTabla
}

//OTRA OPCION ES
// module.export.crearArchivo = (base) => {
//
// }

//CON MODULE EXPORT => puedes poner recursos para que sean accesibles desde otros lugares