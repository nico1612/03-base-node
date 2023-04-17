import {crearArchivo} from './helpers/multiplicar.js';
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
 
/* Configurando Yarg */
const argv = yargs(hideBin(process.argv))
                .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true
                    },
                })
                .check((argv, options)=>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número';
                    }
                    return true;
                })
                .argv;
 

console.clear()



console.log(argv)
console.log('base: yargs', argv.base)
//const base=5


crearArchivo(argv.b)
    .then((nombreArchivo)=>console.log(nombreArchivo, 'creado'))
    .catch((err)=>console.log(err))