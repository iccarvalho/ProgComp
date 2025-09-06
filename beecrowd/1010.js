// exercício 1009 do beecrowd by iccarvalho

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let peca1 = lines[0].split(` `);
let peca2 = lines[1].split(` `);

let valorPeca1 = parseInt(peca1[1]) * parseFloat(peca1[2]).toFixed(2);
let valorPeca2 = parseInt(peca2[1]) * parseFloat(peca2[2]).toFixed(2);
let valorTotal = valorPeca1 + valorPeca2;

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);
