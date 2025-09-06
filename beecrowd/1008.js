// exercício 1008 do beecrowd by iccarvalho


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num = parseInt(lines[0]);
let horas = parseInt(lines[1]);
let valorHora = parseFloat(lines[2]).toFixed(2);

let salario = horas * valorHora;

console.log(`NUMBER = ${num}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
