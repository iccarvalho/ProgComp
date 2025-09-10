/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 0;
while(i < lines.length){
    let dimensoes = lines[i].split(" ");
    let x = parseInt(dimensoes[0]);
    let y = parseInt(dimensoes[1]);
    let pedidos = parseInt(dimensoes[2]);
    for(let j = 1; j < pedidos + i; j++){
        let placa = lines[i];
        if(parseInt(placa[0]) <= x && parseInt(placa[1]) <= y || parseInt(placa[0]) <= y && parseInt(placa[1]) <= x){
            console.log(`Sim`);
        } else{
            console.log(`Nao`);
        }
    }
    i += pedidos+1;
}
NAO FUNFA, SOU BURRO
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(/\s+/); // remove o espaço e /n

let i = 0;
while(i < lines.length){
    let x = parseInt(lines[i++]); // dimensão da placa
    let y = parseInt(lines[i++]); // dimensão da placa
    let pedidos = parseInt(lines[i++]); // quantidade de pedidos
    for(let j = 0; j < pedidos; j++){
        let xi = parseInt(lines[i++]); // dimensão informada
        let yi = parseInt(lines[i++]); // dimensao informada
        if((xi <= x && yi <= y) || (xi <= y && yi <= x)){
            console.log(`Sim`);
        } else{
            console.log(`Nao`);
        }
    }
}
