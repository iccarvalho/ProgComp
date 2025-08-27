function ex003(){
    let poluicao = [];
    let regioes = [];
    let dias = [];

    // input das regiões
    for(let i = 0; i < 5; i++){
        regioes.push(String(prompt(`Informe o nome da ${i+1}ª região`)));
    }

    // input dos dias
    for(let i = 0; i < 5; i++){
        do{
            dias[i] = Number(prompt(`Informe o ${i+1}º dia que será analisado`));
        } while(isNaN(dias[i]) || dias[i] < 0 || dias[i] > 31)
    }

    // input dos índices de poluição das regiões nos determinados dias
    for(let i = 0; i < 5; i++){
        poluicao[i] = [];
        for(let j = 0; j < 5; j++){
            do{
                poluicao[i][j] = Number(prompt(`Informe o índice de poluição da região ${regioes[i]} no dia ${dias[j]}`));
            } while(isNaN(poluicao[i][j]) || poluicao[i][j] < 0 || poluicao[i][j] > 500)
        }
    }

    
    // soma os valores das diagonais em suas determiandas variáveis
    let diagonalPrincipal = [];
    let somaDiagPrincipal = 0;
    let diagonalSecundaria = [];
    let somaDiagSecundaria = 0;

    for(let i = 0; i < poluicao.length; i++){
        diagonalPrincipal[i] = poluicao[i][i];
        somaDiagPrincipal += poluicao[i][i];
        diagonalSecundaria[i] = poluicao[i][(poluicao.length-1)-i];
        somaDiagSecundaria += poluicao[i][(poluicao.length-1)-i];
    }

    // 
    let somaRegioes = [];
    let indiceCritico = 0;
    let maiorIndice = poluicao[0][0];
    let regiaoMaior = 0;
    let diaMaior = 0;
    let regiaoMenorMedia = 0;

    for(let i = 0; i < poluicao.length; i++){
        somaRegioes[i] = 0;
        for(let j = 0; j < poluicao[i].length; j++){
            somaRegioes[i] += poluicao[i][j]
            if(poluicao[i][j] > 300){
                indiceCritico++;
            }
            if(maiorIndice < poluicao[i][j]){
                maiorIndice = poluicao[i][j];
                regiaoMaior = i;
                diaMaior = j;
            }
            if
        }
        somaRegioes[i] = somaRegioes[i] / poluicao.length;
    }

    // output
    console.log(`\nValores da diagonal principal: ${diagonalPrincipal.join(", ")}` + `\nMédia da diagonal principal: ${somaDiagPrincipal/diagonalPrincipal.length}`);
    console.log(`\nValores da diagonal secundária: ${diagonalSecundaria.join(", ")}` + `\nMédia da diagonal principal: ${somaDiagSecundaria/diagonalSecundaria.length}`);
    console.log(`\nMaior índice de poluição: ${maiorIndice}, no dia ${diaMaior}, na região ${regioes[regiaoMaior]}`);
    console.log(`\nQuantidade de dias com índice crítico de poluição: ${indiceCritico}`);
    console.log(`A região  que teve, em média, o menor índice de poluição ao longo dos 5 dias`)
}