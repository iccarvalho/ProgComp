function biblioteca(){

    let biblioteca = [];

    for(let i = 0; i < 5; i++){
        let titulo = String(prompt(`Informe o título do ${i+1}º livro`));
        let autor = String(prompt(`Informe o autor do ${i+1}º livro`));
        let ano = Number(prompt(`Informe o ano de publicação do ${i+1}º livro`));
        let paginas = Number(prompt(`Informe a quantidade de páginas do ${i+1}º livro`));

        let livro = {
            titulo: titulo,
            autor: autor,
            ano: ano,
            paginas: paginas
        }
        biblioteca.push(livro);
    }

    let maior = biblioteca[0]
    let media = 0
    
    console.log(`Obras com mais de 300 páginas:\n`)
    for(let i = 0; i < 5; i++){
        media += biblioteca[i].paginas

        if(biblioteca[i].paginas > 300){
            console.log(biblioteca[i])
        }

        if(biblioteca[i].paginas > maior.paginas){
            maior = biblioteca[i]
        }
    }
    media /= 5
    console.log(`\nObra com maior número de páginas: ${maior.titulo}`)
    console.log(`\nMédia de paginas dos livros cadastrados: ${media}`)
}