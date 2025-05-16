function exe02() {
    let preco = 5;
    let qtde = 120;
    const despesa = 200;
    let lucro;
    let aux = "";
    let maiorLucro = 0;
    let qtdeMaiorLucro = 0;
    let precoMaiorLucro = 0;

    while(preco >= 1){
        lucro = preco*qtde-200;
        if (lucro > maiorLucro){
            maiorLucro = lucro;
            qtdeMaiorLucro = qtde;
            precoMaiorLucro = preco;
        }
        aux+= `----------------------------------------------------------------------\n` +
            `Preco: R$${preco.toFixed(2)} | Qtde: ${qtde} | Despesa: R$${despesa.toFixed(2)} | Lucro: R$${lucro.toFixed(2)}\n`;
        qtde+=26
        preco-=0.5;
    }

    alert(aux)
    alert(`Melhor opção\n Preço: ${precoMaiorLucro.toFixed(2)} | Qtde : ${qtdeMaiorLucro} | Lucro: R$${maiorLucro.toFixed(2)}`)
}