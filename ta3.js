///ejercicio 2

let findTheOldest = (personas) =>{
    let resultado = 0
    for(i = 0; i <= personas.lenght; i++){
        if(personas[i] > resultado ){
            resultado = personas[i]
        }
    }
    return resultado
}