const { crearArchivo } = require('./helpers/multiplicar');

// 5 x 1 = 5
// 5 x 2 = 10

console.clear();
const [, , arg3 = 'base=5'] = process.argv
const [ , base = 5 ] = arg3.split('=');
// exec as node app --base=5
console.log(base);

// const base = 5; 

crearArchivo(base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));