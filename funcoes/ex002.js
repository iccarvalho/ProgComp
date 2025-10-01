function main(){
    let a = 10;
    alterarNumero(a);
    console.log(a);
    
    let vetor = [10, 20, 30];
    alterarVetor(vetor);
    console.log(vetor);
}

function alterarNumero(x){
    x = 100;
}

function alterarVetor(v){
    v[0] = 100;
}

main()