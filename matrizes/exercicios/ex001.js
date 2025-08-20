function ex001(){
    let matriz = [];
    let soma = 0;
    let pares = 0;

    for(let i = 0; i < 3; i++){
        matriz[i] = [];
        for(let j = 0; j < 3; j++){
            matriz[i][j] = parseInt(Math.random() * 10); //informa números randomicos entre 0 e 1, multiplicando-o por 10 e tranformando em inteiro
        }
    }

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length ; j++){
            soma += matriz[i][j];
            if(matriz[i][j] % 2 == 0){
                pares++;
            }
        }
    }

    let sec = [];
    for(let i = 0; i < matriz.length; i++){
        sec.push(matriz[i][(matriz[i].length - 1) - i]);
    }
    console.log(`\nSoma de todos os elementos: ${soma}`);
    console.log(`\nQuantidade de números pares: ${pares}`);
    console.log(`\nValores da diagonal secundária: ${sec.join(", ")}`)
}