function ex002(){
    let vendas = [];
    let nomeVendedor = []

    for(let i = 0; i < 4; i++){
        nomeVendedor[i] = String(prompt(`Informe o nome do vendedor ${i+1}`))
        vendas[i] = [];
        for(let j = 0; j < 7; j++){
            vendas[i][j] =  parseInt(Math.random() * 100);
        }
    }
    console.log(vendas)

    let somaTotal = 0;

    for(let i = 0; i < vendas.length; i++){
        let vendedor = 0;
        for(let j = 0; j < vendas[i].length; j++){
            somaTotal += vendas[i][j];
            vendedor += vendas[i][j];
        }
        console.log(`\nVendedor ${nomeVendedor[i]} vendeu R$${vendedor.toFixed(2)} na semana`)
    }
    
    for(let j = 0; j < 7; j++){
        let semana = 0;
        for(let i = 0; i < 4; i++){
            semana += vendas[i][j];

        }
        console.log(`\nVendas na ${j+1}ª semana: R$${semana.toFixed(2)}`)
    }
    
    let maiorVenda = vendas[0][0];
    let posicao = ``;
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 7; j++){
            if(vendas[i][j] > maiorVenda){
                maiorVenda = vendas[i][j];
                posicao = `(${i}, ${j})`
            }
        }
    }
    console.log(`\nMaior venda individual: R$${maiorVenda.toFixed(2)}, na posição ${posicao}`)
    console.log(`\nMédia das vendas: R$${(somaTotal / (vendas.length * vendas[0].length)).toFixed(2)}`)
}