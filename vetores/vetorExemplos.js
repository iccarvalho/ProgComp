function ex001(){
    let vet = []
    let i
    let par = []
    let impar = []

    for(i = 0; i < 6; i++){
        vet.push(Number(prompt(`Informe o ${i+1}º o número`))) // push adiciona um elemento ao indice da array
    }
    for(i = 0; i < 6; i++){
        if(vet[i] % 2 == 0){
            par.push(vet[i]) 
        } else {
            impar.push(vet[i])
        }
    }
    alert(`Elementos pares: ${par}\nElementos ímpares: ${impar}`)
}

/*
let vet = [] // declara um vetor

vet.push() // adiciona ao vetor

vet.lenght // mostra o tamanho do vetor

vet.splice() // remove o elemento do indice indicado dentro de ()

vet.pop // remove o último indice

alert(`${vet}`) // mostra todos os elementos do vetor

alert(`${vet[i]}`) // mostra o elemento do indice indicado dentro do []

*/

// ler um vetor de 10 elementos inteiros. Some 10 nos elementos das posições pares; Multiplique por 5 nos elementos das posições ímpares.

function ex002(){
    let i;
    let vet = [];

    for(i = 0; i<10; i++){
        vet.push(Number(prompt(`Informe o ${i+1} número`)))
    }
    alert(vet)
    for(i = 0; i<10; i++){
        if(i % 2 == 0){
            vet[i] += 10
        } else{
            vet[i] *= 5
        }
    }
    alert(vet)
}

function ex003(){
    let i;
    let vet = [];
    let count1 = 0, count2 = 0, count3 = 0;
    
    for(i = 0; i < 10; i++){
        do {
            vet[i] = (Number(prompt(`Informe o ${i+1}º número`)))
        } while (vet[i] != 1 && vet[i] != 2 && vet[i] != 3);
        if (vet[i] == 1){
            count1++
        } else if( vet[i] == 2){
            count2++
        } else{
            count3++
        }
    }
    alert(`Quantidade de pessoas que responderam cada opção:\n` +
        `1: ${count1}\n` + `2: ${count2}\n` + `3: ${count3}`
    )
    alert(`Porcentagem de pessoas que não gostaram: ${(count3/10)*100}%`)
}

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