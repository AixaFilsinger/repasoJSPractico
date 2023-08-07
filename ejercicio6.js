//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let numero1= parseInt(prompt("ingrese un numero para comparar cual es el mayor"));
let numero2= parseInt(prompt("ingrese un segundo numero para comparar cual es el mayor"));

if(!isNaN){
    if(numero1>numero2){
    document.write(`El número ${numero1} es mayor que ${numero2}`);
}else{
    document.write(`El número ${numero2} es mayor que ${numero1}`)
}
}else{
    alert("por favor ingrese un numero")
}

