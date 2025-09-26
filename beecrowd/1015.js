let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(/\s+/);

let x1 = parseFloat(lines[0]);
let y1 = parseFloat(lines[1]);
let x2 = parseFloat(lines[2]);
let y2 = parseFloat(lines[3]);

let distancia = Math.sqrt((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));

console.log(distancia.toFixed(4));