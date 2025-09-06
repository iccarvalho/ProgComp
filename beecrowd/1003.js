// exercício 1003 do beecrowd by iccarvalho

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let SOMA = A + B;

console.log(`SOMA = ${SOMA}`);
