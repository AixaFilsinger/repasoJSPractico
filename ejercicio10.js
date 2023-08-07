//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let numero = parseInt(prompt("Ingrese un numero"));

if(numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 ||numero % 7 === 0){
    numero % 2 === 0? document.write("Es divisible por 2"):
    numero % 3 === 0? document.write("Es divisible por 3"):
    numero % 5 === 0? document.write("Es divisible por 5"):
    document.write("Es divisible por 7")
}else{
    alert("EL numero ingresado no es divisible por ninguno de estos numeros(2,3,5,7)")
}