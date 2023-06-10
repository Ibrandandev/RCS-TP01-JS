// // 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

// alert("un mensaje");

// // 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

// document.write("Hello World");
// document.write("<br>");

// // 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

// document.write("3 + 5 =", 3 + 5);
// document.write("<br>");

// // 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

// let nombreUsuario = prompt("Escriba su nombre de usuario");
// document.write("Hola: ", nombreUsuario);
// document.write("<br>");

// // 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

// let num1 = parseInt(prompt("Ingrese un numero:"));
// let num2 = parseInt(prompt("Ingrese otro numero:"));

// document.write(
//   `Numero1: ${num1} - Numero2: ${num2} - Resultado = ${num1 + num2}`
// );
// document.write("<br>");

// // 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

// num1 = parseInt(prompt("Ingrese un numero:"));
// num2 = parseInt(prompt("Ingrese otro numero:"));

// document.write(`El ${Math.max(num1, num2)} es el numero más grande`);
// document.write("<br>");

// // 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

// num1 = parseInt(prompt("Ingrese un numero:"));
// num2 = parseInt(prompt("Ingrese otro numero:"));
// let num3 = parseInt(prompt("Ingrese otro numero:"));

// document.write(`El ${Math.max(num1, num2, num3)} es el numero más grande`);
// document.write("<br>");

// // 8.- Escribe un programa que pida un número y diga si es divisible por 2

// num1 = parseInt(prompt("Ingrese un numero:"));

// if (num1 % 2 == 0) {
//   document.write(`El ${num1} es divisible por 2.`);
// } else {
//   document.write(`El ${num1} no es divisible por 2.`);
// }

// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt

// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

num1 = parseInt(prompt("Ingrese un numero:"));

switch (true) {
  case num1 % 2 == 0:
    document.write(`El ${num1} es divisible por 2.`);
    break;

  case num1 % 3 == 0:
    document.write(`El ${num1} es divisible por 3.`);
    break;

  case num1 % 5 == 0:
    document.write(`El ${num1} es divisible por 5.`);
    break;

  case num1 % 7 == 0:
    document.write(`El ${num1} es divisible por 7.`);
    break;
}

// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
