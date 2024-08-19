//// ejercicio 1:

let sumAll = (a , b) =>{
    let resultado = 0;
    for(let i = a ; i <= b; i++){
        resultado += i;
    }
    let para = document.createElement("p");
    para.textContent = resultado;
    document.body.appendChild(para);

}
let repeat = document.getElementById("repeat");

repeat.addEventListener("click", () => {
    let a =  parseInt(prompt("Ingresa el primer numero"));
    let b = parseInt(prompt("Ingresa el segundo numero"));
    sumAll(a,b)
});

//// ejercicio 2: 
let fahrenheitToCelsius = (f) =>{
    let resultado = (f - 32) * 5 / 9
    let para = document.createElement("p");
    para.textContent = resultado;
    document.body.appendChild(para);
}
let grados = document.getElementById("grados");

grados.addEventListener("click", () => {
    let a =  parseInt(prompt("ingrese grados faharenhe para pasarlos a celcius"));
    fahrenheitToCelsius(a)
});


let celsiusToFahrenheit = (c) =>{
    let resultado = (c * 9 / 5) + 32;
    let para = document.createElement("p");
    para.textContent = resultado;
    document.body.appendChild(para);
}
let grados1 = document.getElementById("grados1");

grados1.addEventListener("click", () => {
    let a =  parseInt(prompt("ingrese grados celcius para pasarlos a faharenhe"));
    celsiusToFahrenheit(a)
});


//// ejercicio 3
 let leapYears = (año) =>{
    let resultado;
    if (año % 4 === 0){
        resultado = true;
    } else{
        resultado = false;
    }
    let para = document.createElement("p");
    para.textContent = resultado;
    document.body.appendChild(para);
 } 

 let leapYears1 = document.getElementById("leapYears")
 leapYears1.addEventListener("click", () => {
    let a =  parseInt(prompt("ingrese año para ver si es bisiesto"));
    leapYears(a)
});