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