function palindromo(){
    let palavra = prompt("Informe uma palavra para verificar se é um palíndromo").trim();

    let palavraReverse = palavra.split("").reverse(); // armazena a palavra em vetor e inverte ela
    palavraReverse = palavraReverse.join(""); // transforma o vetor em string novamente
    
    if(palavra == palavraReverse){ 
        console.log(`A palavra ${palavra} é palíndroma!`);
    } else{
        console.log(`A palavra ${palavra} NÃO é palíndroma!`);
    }
}