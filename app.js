import {crearArchivo} from './helpers/multiplicar.js';
import { argv  } from './config/yargs.js';
/* Configurando Yarg */

console.clear()

crearArchivo(argv.b,argv.l,argv.h)
    .then((nombreArchivo)=>console.log(nombreArchivo, 'creado'))
    .catch((err)=>console.log(err))