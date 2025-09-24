let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(' ');

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);

let triangulo  = (A*C)/2;
let circulo = 3.14159 * C * C;
let trapezio = ((A + B) * C)/2;
let quadrado = B * B;
let retangulo = A * B;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}\nCIRCULO: ${circulo.toFixed(3)}\nTRAPEZIO: ${trapezio.toFixed(3)}\nQUADRADO: ${quadrado.toFixed(3)}\nRETANGULO: ${retangulo.toFixed(3)}`);