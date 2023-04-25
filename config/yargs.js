import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export const argv = yargs(hideBin(process.argv))
        .options({
            'b': {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe:'toma la base de multiplicar'
            },
            'l':{
                alias:'listar',
                type:'boolean',
                default: false,
                describe: 'Muestra la tabla en consola'                
            },
            'h':{
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe:'Este es el número hasta donde quieres la tabla' 
            }
        })
        .check((argv, options)=>{
            if(isNaN(argv.b)){
                throw 'La base tiene que ser un número';
            }
            return true;
        })
        .argv;