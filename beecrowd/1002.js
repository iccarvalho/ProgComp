// exercício 1002 do beecrowd by iccarvalho

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = 3.14159;
let raio = parseFloat(lines[0]);
let area = n*(raio*raio);

console.log(`A=${area.toFixed(4)}`);
