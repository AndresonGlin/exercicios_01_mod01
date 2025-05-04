/*
5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/

const prompt = require('prompt-sync')();

let peso = Number(prompt("Digite seu peso: ").replace(',','.'));
let altura = Number(prompt("Digite sua altura: ").replace(',','.'));
let imc = peso / (altura * altura);

if(imc < 18.5){
    console.log(`Seu IMC é ${imc.toFixed(2)}. Classifição: Abaixo do Peso.`)
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Classifição: Peso normal.`)
} else if (imc >= 25.0 && imc <= 29.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Classifição: Sobrepeso.`)
} else if (imc >= 30.0 && imc <= 34.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Classifição: Obesidade grau I.`)
} else if (imc >= 35.0 && imc <= 39.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Classifição: Obesidade grau II.`)
} else if (imc >= 40.0) {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Classifição: Obesidade grau III.`)
} else {
    console.log('Peso ou Altura inválida!')
}