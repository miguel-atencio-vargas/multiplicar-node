const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar');
const {
    argv
} = require('./config/yargs');
const colors = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(e => console.log(e));
        break
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break
    default:
        console.log('El comando introducido no se pudo reconocer.')
}