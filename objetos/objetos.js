// obejtos em JS

let jogo = {
    titulo: 'Super Caue Adventures',
    ano: 2025,
    desc: 'late.'
}
console.log(jogo.titulo);
console.log(jogo.ano);
console.log(jogo.desc);

// Array de objetos

let biblioteca = [
    {
        titulo: 'Super Caue Adventures',
        ano: 2025,
        desc: 'late.',
        preco: 149.99
    },
    {
        titulo: 'Escape from Glauglau',
        ano: 2024,
        desc: 'Horror game',
        preco: 99.99
    },
    {
        titulo: 'Miguel Ring',
        ano: 2023,
        desc: 'the GOTY.',
        preco: 200.49
    }
]


for(let i = 0; i<biblioteca.length; i++){
    console.log(biblioteca[i].titulo)
}

for(let i = 0; i<biblioteca.length; i++){
    if(biblioteca[i].preco < 100){
        console.log(biblioteca[i].titulo);
    }
}

// usuário informando atributos de objetos

let loja = [];

for(let i = 0; i < 3; i++){
    let nome = prompt(`Informe o nome do ${i+1} produto`);
    let desc = prompt(`Informe a descrição do ${i+1} produto`);
    let preco = Number(prompt(`Informe o preço do ${i+1} produto`));
    let qtde = Number(prompt(`Informe o estoque do ${i+1} produto`));

    let produto = {
        nome: nome,
        desc: desc,
        preco: preco,
        qtde: qtde
    }

    loja.push(produto)
}