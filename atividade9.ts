//*Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:Mostre na tela todas as cores adicionadas. Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
//*

// escolha 5 cores
// adicionar no Array as cores
// mostar na telas todas as cores
// mostre na tela as cores em ordem crescente.

import leia from "readline-sync"

let listadecores: Array <string> = new Array <string> ()

for (let contador = 0; contador <= 5; contador ++){

    listadecores.push (leia.question ("Informe uma cor: "));
}

console.log (listadecores)
console.log (listadecores.sort ());


