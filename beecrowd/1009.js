// exercício 1009 do beecrowd by iccarvalho

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let salario = parseFloat(lines[1]);
let vendas = parseFloat(lines[2]);

let salarioFinal = salario + (vendas * 0.15);

console.log(`TOTAL = R$ ${salarioFinal.toFixed(2)}`);
