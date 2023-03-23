const fs = require('fs');

// 5 x 1 = 5
// 5 x 2 = 10

console.clear();
console.log('=================');
console.log('  Tabla del: 5   ');
console.log('=================');

const base = 3; 
let salida = '';

for(let i = 1; i <= 10; i++) {
    salida += `${ base } x ${ i } = ${ base * i }\n`;
}

console.log(salida);

fs.writeFile(`tabla-${ base }.txt`, salida, (err) => {
    if (err) throw err;

    console.log('tabla-5.txt creado');
});