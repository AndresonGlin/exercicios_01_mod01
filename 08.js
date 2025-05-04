/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

const prompt = require('prompt-sync')();

let numeros = Array();
numeros[0]  = Number(prompt("Digite um numero: "));
numeros[1]  = Number(prompt("Digite um numero: "));

if(numeros[0] < numeros[1]){
    console.log(numeros[0], numeros[1])
} else {
    console.log(numeros[1], numeros[0])
} 

