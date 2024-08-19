
const repeatString = (texto,repeticiones )  => {
    for (let i = 0; i < repeticiones; i++){
        let para = document.createElement("p");
        para.textContent = texto;
        document.body.appendChild(para);
    }
}
let repeat = document.getElementById("repeat");

repeat.addEventListener("click", () => {
    let texto = prompt("Ingresa el texto que quieres repetir:");
    let repeticiones = parseInt(prompt("Ingresa el número de repeticiones:"));
    repeatString(texto, repeticiones);
});

const reverseString = (texto) =>{
    let nuevacadena = "";
    for(let i = texto.length - 1; i >= 0 ; i--){
        nuevacadena += texto[i]
    }
    let para1 = document.createElement("p");
    para1.textContent = nuevacadena;
    document.body.appendChild(para1)
}
let reverse = document.getElementById("reverse");

reverse.addEventListener("click", () => {
    let texto = prompt("Ingresa el texto que quieres dar vuelta: ");
    reverseString(texto)
});

//// EJERCICIO 2.

let  removeFromArray = (arreglo,item) => {
    if(arreglo.includes(item)){
        let resultado = arreglo.filter(elemento => elemento !== item);
        console.log(resultado)
    }else{
        console.log("el elemento no se encuentra en el array")
    }
}

///// EJERCICIO 3.
let getOdds = (arreglo) => {
    let resultado = arreglo.filter(elemento => elemento % 2 !== 0)
    console.log(resultado)
}

