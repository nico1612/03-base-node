import { writeFileSync } from 'fs';
 
export const crearArchivo= async(base=5)=>{

    try{
        console.log('============')
        console.log(`base del ${base}`)
        console.log('============')
    
    
        let salida=''
    
        for(let i=1;i<=10;i++){
            salida+=(`${base} x ${i} = ${i*base}\n`)
        }
        
        console.log(salida)
        writeFileSync(`tabla-${base}.txt`,salida)
        
        return  `tabla-${base}.txt creado`
    }
    catch(err){
        throw err
    }
    

}


