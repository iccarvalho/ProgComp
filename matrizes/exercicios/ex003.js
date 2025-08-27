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
        } while(isNaN(dias[i]))
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

    let diagonalPrincipal = 0;
    let diagonalSecundaria = 0;

    // soma os valores das diagonais em suas determiandas variáveis
    for(let i = 0; i < poluicao.length; i++){
        diagonalPrincipal += poluicao[i][i]
        diagonalSecundaria += poluicao[i][4-i]
    }

    let mediaTotal = 0;
    let indiceCritico = 0;
    let maiorIndice = poluicao[0][0];
    let regiaoMaior = 0;
    let diaMaior = 0;

    for(let i = 0; i < poluicao.length; i++){
        for(let j = 0; j < poluicao[i].length; j++){
            mediaTotal += poluicao[i][j]
            if(poluicao[i][j] > 300){
                indiceCritico++
            }
            if(maiorIndice < poluicao[i][j]){
                maiorIndice = poluicao[i][j]
                regiaoMaior = i;
                diaMaior = j;
            }
        }
    }
}