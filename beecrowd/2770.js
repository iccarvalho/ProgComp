var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(/\s+/); // remove o espaço e /n

let i = 0;
while(i < lines.length){
    let x = parseInt(lines[i++]); // dimensão da placa
    let y = parseInt(lines[i++]); // dimensão da placa
    let pedidos = parseInt(lines[i++]); // quantidade de pedidos
    for(let j = 0; j < pedidos; j++){
        let xi = parseInt(lines[i++]); // dimensão informada
        let yi = parseInt(lines[i++]); // dimensao informada
        if((xi <= x && yi <= y) || (xi <= y && yi <= x)){
            console.log(`Sim`);
        } else{
            console.log(`Nao`);
        }
    }
}
