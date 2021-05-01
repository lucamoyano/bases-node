const argv  = require ('./config/yargs');


const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

// console.log(argv);
// console.log('base: yargs', argv.b );

//const base = 5;

crearArchivo( argv.base, argv.listar, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));




