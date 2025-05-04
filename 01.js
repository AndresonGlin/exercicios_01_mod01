/*
1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.
*/

const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um numero: "));

if(numero % 2 === 0){
    console.log('Par');  
}   

if(numero % 2 === 1) {
    console.log('Ímpar')
}

