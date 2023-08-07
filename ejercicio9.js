//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

let cadena = prompt("Ingrese una frase");
let vocales = ["a", "e", "i", "o", "u"];
let resultado = "";

for (let i = 0; i < cadena.length; i++) {
  let letra = cadena.charAt(i).toLowerCase();
  if (vocales.includes(letra)) {
    resultado += letra;
  }
}

document.write("Las vocales que aparecen en la frase son: " + resultado);
