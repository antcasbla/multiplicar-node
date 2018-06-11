//importar dependecia del paquete yargs
const argv = require('yargs')
                    .command('listar', 'Imprime en consola la tabla de multiplicar', {
                        base:{
                            demand:true, //obligatorio
                            alias: 'b' //shortcuts
                        },
                        limite: {
                            alias: 'l',
                            default: 10
                        }
                    })
                    .help() //para documentacion
                    .argv;


const {crearArchivo} = require('./multiplicar/multiplicar');

//process no hay que definirlo en ningún lugar
// cuando se ejecuta se crea esa variable de entorno llamada 'process'
//console.log(process.argv);

//argv son los argumentos de entrada
// node --help => te da la información de los parametros
//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(argv);
//console.log(argv2);

//console.log(base);


//console.log(argv.base);
console.log('Limite: ', argv.limite);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));
//
