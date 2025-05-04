/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

const prompt = require('prompt-sync')();

let numeroMacas = Number(prompt("Quantas maçãs foram compradas? "));
let valorMaca = 0;

if(numeroMacas < 12) {
    valorMaca = 0.30;
    console.log(`Valor total da compra foi ${(valorMaca * numeroMacas).toFixed(2)}`);
} else if(numeroMacas >= 12){
    valorMaca = 0.25;
    console.log(`Valor total da compra foi ${(valorMaca * numeroMacas).toFixed(2)}`);
} else {
    console.log('Quantidade inválida')
}