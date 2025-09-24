let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let raio = parseFloat(lines[0]);
let pi = 3.14159;
let volume = (4/3) * pi * raio * raio * raio;

console.log(`VOLUME = ${volume.toFixed(3)}`);