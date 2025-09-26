let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(' ');

let maior = parseInt(lines[0]);

for(let i = 0; i < lines.length; i++){
   if(maior < parseInt(lines[i])){
       maior = parseInt(lines[i]);
   }
}

console.log(`${maior} eh o maior`);