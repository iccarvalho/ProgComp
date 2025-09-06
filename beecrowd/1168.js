// exercício 1168 do beecrowd by iccarvalho

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let casos = parseInt(lines[0]);

for(let i = 1; i <= casos; i++){
    let leds = 0;
    let painel = lines[i].toString();
    for(let j = 0; j <= painel.length; j++){
        switch (painel[j]) {
            case "0":
            case "6":
            case "9":
                leds += 6;
                break;
            case "2":
            case "3":
            case "5":
                leds += 5;
                break;
            case "1":
                leds += 2;
                break;
            case "4":
                leds += 4;
                break;
            case "7":
                leds += 3;
                break;
            case "8":
                leds += 7;
                break;
        }
    }
    console.log(`${leds} leds`);
}
