/*
4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const prompt = require('prompt-sync')();

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