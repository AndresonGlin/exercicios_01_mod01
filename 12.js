//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for. 
const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um numero para exibir a tabuada: "))
let operacao = prompt("Digite qual tabuada deseja visualizar: Soma, Subtracao, Multiplicacao ou Divisao: ");


if (operacao === 'Soma') {
    for (let i = 1; i < 11; i++) {
        console.log(`${i} + ${numero} = ${i + numero}`);
    }
} else if (operacao === 'Subtracao') {
    for (let i = 1; i < 11; i++) {
        console.log(`${i} - ${numero} = ${i - numero}`);
    }
} else if (operacao === 'Multiplicacao') {
    for (let i = 1; i < 11; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`);
    }
} else if (operacao === 'Divisao') {
    for (let i = 1; i < 11; i++) {
        let resultado = (i / numero).toFixed(2);
        console.log(`${i} ÷ ${numero} = ${resultado}`);
    }
} else {
    console.log("Operação inválida! Tente: Soma, Subtracao, Multiplicacao ou Divisao.");
}