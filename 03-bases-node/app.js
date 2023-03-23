const { crearArchivo } = require('./helpers/multiplicar');

// 5 x 1 = 5
// 5 x 2 = 10

console.clear();

const base = 3; 

crearArchivo(base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));