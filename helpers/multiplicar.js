const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar, hasta = 10 ) => {
    
    try {
        let salida = '';
        let consola = '';

        for ( let i = 1; i <= hasta; i++ ){
            salida += `${base} x ${i} = ${base*i}\n` ;
            //Lo que se muestra en consola, con colores
            consola += `${colors.blue(base)} ${'x'.green} ${colors.blue(i)} ${'='.green} ${colors.magenta(base*i)}\n` ;
        } 

        //Grabar archivo con resultado
        fs.writeFileSync( `salida/tabla-${base}.txt`, salida );

        if ( listar ) {
            //Mostrar en consola
            console.clear();
            console.log(colors.rainbow('========================'));
            console.log(`     Tabla del: `.magenta, base);
            console.log(colors.rainbow('========================'));
            console.log(consola);
        }

        return `tabla-${base}.txt`.green;

    } catch (err) {
        console.log(err);
    }

}

module.exports = {
    crearArchivo
}

