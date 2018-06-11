const opts = {
    base:{
        demand:true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


//importar dependecia del paquete yargs
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help() //para documentacion
    .argv;

module.exports = {
    argv
}