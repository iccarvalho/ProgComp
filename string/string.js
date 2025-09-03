let frase = "estou estudando JS";

console.log(frase);
console.log(frase[4]); // retorna o carcter no índice 4
console.log(frase.length); // retorna o número de caracteres
console.log(frase.toUpperCase()); // converte para maiusculo
console.log(frase.toLowerCase()); // converte para minusculo
console.log(frase.toUpperCase().includes(`JS`)); // verifica se contém um texto
console.log(frase.slice(0, 5)); // retorna parte da string
console.log(frase.substring(0, 5)); // retorna parte da string

frase = "  estou estudando JS  ";
console.log(frase.trim());; // remove os espaços antes e depois da string

let resumo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate illo. Iure harum ullam, nostrum dolores, distinctio voluptatibus deserunt libero ex sapiente, nisi aliquid asperiores recusandae nulla fuga non! Cupiditate?"
console.log(resumo.length);
console.log(resumo.split(" ").length) // converte string em vetor, dividindo de acordo com os parâmetros informados, como espaço, podendo utilizar o .length para saber a quantidade de palavras

let aprovados = "Lucca,Igor,Cauê,Rosa,Miguel";
let vetAprov = aprovados.split(","); // cria o array
console.log(vetAprov);
console.log(vetAprov.length);

/*
4
9
13

"4\n9\n13".split("\n")
*/