const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

// 5 x 1 = 5
// 5 x 2 = 10

console.clear();

crearArchivo(argv.b, argv.l)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));