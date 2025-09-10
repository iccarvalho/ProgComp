var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let total = parseInt(lines[0]);
let qtdeFig = parseInt(lines[1]);
let figurinhas = new Set(); // cria uma classe que receberá os números das figurinhas, ignorando as repetidas

for(let i = 2; i <= qtdeFig+1; i++){
    figurinhas.add(lines[i]);
}

let qtdeFaltas = total - figurinhas.size;

console.log(qtdeFaltas);