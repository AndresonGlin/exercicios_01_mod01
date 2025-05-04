//  13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;
let numero = 0;

do {
    numero = parseFloat(prompt("Digite um numero decimal ou zero para ter a média dos numeros: "));

    if (numero !== 0) {
        soma = soma + numero;
        contador++;
    }

} while (numero !== 0);

if (contador > 0) {
    let media = soma / contador;
    console.log(`A média dos ${contador} números é: ${media.toFixed(2)}`);
} else {
    console.log("Nenhum número válido foi digitado.");
}
