let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let distancia = parseInt(lines[0]);
let combustivel = parseFloat(lines[1]);

let consumo = distancia / combustivel;

console.log(`${consumo.toFixed(3)} km/l`);