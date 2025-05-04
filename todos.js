const prompt = require('prompt-sync')();

/*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.*/
let numero = Number(prompt("Digite um numero: "));

if(numero % 2 === 0){
    console.log('Par');  
}   

if(numero % 2 === 1) {
    console.log('Ímpar')
}


/*2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.*/
let idade = Number(prompt("Digite sua idade: "));

if(idade < 13) {
    console.log('Criança')
} else {
    if(idade < 18) {
        console.log('Adolescente')
    } else {
        if(idade < 60) {
            console.log('Adulto')
        } else {
            if(idade >= 60) {
                console.log('Idoso')
            } else {
                console.log('Idade inválida')
            }
        }
    }
}


/*3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/
let nota = Number(prompt("Digite uma nota: "));

if(nota >= 0 && nota < 5) {
    console.log('Reprovado')
} else if (nota >= 5 && nota < 7) {
    console.log('Recuperação')
} else if (nota >= 7 && nota <= 10) {
    console.log('Aprovado')
} else {
    console.log('Nota inválida!')
}


/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.*/
let menu = prompt('Escolha (digite) uma das opções do Menu: Cadastrar, Editar ou Excluir: ')

switch(menu){
    case 'Cadastrar': {
        console.log('Menu escolhido foi Cadastrar');
        break
    }
    case 'Editar': {
        console.log('Menu escolhido foi Editar');
        break
    }
    case 'Excluir': {
        console.log('Menu escolhido foi Editar');
        break
    }
    default: 
        console.log('Opção inválida');

}


/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.*/
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


/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

let A = Number(prompt("Digite o primeiro valor: "))
let B = Number(prompt("Digite o segundo valor: "))
let C = Number(prompt("Digite o terceiro valor: "))

if((A < B + C) && (B < A + C) && (C < A + B)) {
    if(A != B && B != C) {
        console.log('Triângulo escaleno')        
    } else if (A == B && B == C) {
        console.log('Triângulo eqüilátero')
    } else {
        console.log('Triângulo isósceles')
    }
} else {
    console.log(`Valores ${A}, ${B} e ${C} não formam um triangulo.`)
}


/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule 
e escreva o valor total da compra.*/
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


/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.*/
let numeros = Array();
numeros[0]  = Number(prompt("Digite um numero: "));
numeros[1]  = Number(prompt("Digite um numero: "));

if(numeros[0] < numeros[1]){
    console.log(numeros[0], numeros[1])
} else {
    console.log(numeros[1], numeros[0])
} 


/*9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.*/

for(let i = 10; i > 0; i--) {
    console.log(i);
}

//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
let numero01 = parseInt(prompt("Dogite um numero: "));

for(let i = 0; i < 10; i++) {
    console.log(numero01);
}
  

//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
let soma = 0;

for(let i = 0; i < 5; i++) {
    let numeros = Number(prompt("Digite um numero: "))
    soma = soma + numeros;
}

console.log(`A soma de todos os numeros é ${soma}`);


//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for. 
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


//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
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


//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
let numero = parseInt(prompt("Digite um numero inteiro para calcular o fatorial: "));
let fatorial = 1;


for (let i = 1; i <= numero; i++) {
    fatorial = fatorial * i;
}
console.log(`O fatorial de ${numero} é: ${fatorial}`);


//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
let num1 = 0;
let num2 = 1;

for (let i = 0; i < 10; i++) {
    console.log(num1);
    let soma = num1 + num2;
    num1 = num2;
    num2 = soma;
}