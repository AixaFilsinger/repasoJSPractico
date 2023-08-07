//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let numero1 = parseInt(prompt("ingrese un número"));
let numero2 = parseInt(prompt("ingrese un segundo número"));
let numero3 = parseInt(prompt("ingrese un tercer número"));
console.log(numero3);
if(!isNaN){
    if(numero1 > numero2 && numero1 > numero3){
    document.write(`El número ${numero1} es mayor que ${numero2} y ${numero3}`);
}else if(numero2 > numero1 && numero2>numero3){
    document.write(`El número ${numero2} es mayor que ${numero1} y ${numero3}`)
}else{
    document.write(`El número ${numero3} es mayor que ${numero1} y ${numero2}`)
}
}else{
    alert("por favor ingrese un numero")
}

