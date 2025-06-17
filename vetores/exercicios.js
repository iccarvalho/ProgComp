function exe4(){
    let num = []
    let maior = []
    let media = 0

    for(let i = 0; i < 8; i++){
        num.push(Number(prompt(`Informe o ${i+1}º valor`)))
        media += num[i]
    }
    media /= 8
    for(let i = 0; i < 8; i++){
        if(num[i] > media){
            maior.push(num[i])
        }
    }

    alert(`Média dos valores: ${media}`)
    alert(`Quantidade de valores acima da média: ${maior.length}`)
    alert(`Valores acima da média: ${maior}`)
}

function exe5(){
    let num = []
    maior = 0
    menor = 0
    igual = 0

    for(let i = 0; i < 10; i++){
        num.push(Number(prompt(`Informe o ${i+1}º valor`)))
    }
    for(let i = 0; i < 10; i++){
        if(num[i] > num[0]){
            maior++
        } else if(num[i] < num[0]){
            menor++
        } else{
            igual++
        }
    }
    alert(`Valores maiores que o primeiro: ${maior}`)
    alert(`Valores menores que o primeiro: ${menor}`)
    alert(`Valores iguais ao primeiro: ${igual}`)
}

function exe6(){
    let num = []
    let qtde = 0
    let posicao = []

    for(let i = 0; i < 12; i++){
        num.push(Number(prompt(`Informe o ${i+1}º valor`)))
    }
    let numUser = Number(prompt(`Digite um número a ser buscado no vetor`))
    for(let i = 0; i < 12; i++){
        if(numUser == num[i]){
            qtde++
            posicao.push(i)
        }
    }
    if(qtde == 0){
        alert(`O número ${numUser} não aparece no vetor.`)
    } else if(qtde == 1){
        alert(`O número ${numUser} aparece ${qtde} vez, na posição ${posicao}`)
    } else{
        alert(`O número ${numUser} aparece ${qtde} vezes, nas posições ${posicao}`)
    }
}