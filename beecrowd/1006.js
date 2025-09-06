// exercício 1006 do beecrowd by iccarvalho

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines[0]).toFixed(1);
let B = parseFloat(lines[1]).toFixed(1);
let C = parseFloat(lines[2]).toFixed(1);

let MEDIA = (A * 2 + B * 3 + C * 5)/10;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);
