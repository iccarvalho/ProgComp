var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let leds = {
    '0': 6,
    '1': 2,
    '2': 5,
    '3': 5,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 3,
    '8': 7,
    '9': 6
}

let numCasos = parseInt(lines[0]);

for(let i = 1; i <= numCasos; i++){
    let painel = lines[i];
    let somaLeds = 0;
    for(let j = 0; j < painel.length; j++){
        somaLeds += leds[painel[j]]
    }
    console.log(`${somaLeds} leds`);
}