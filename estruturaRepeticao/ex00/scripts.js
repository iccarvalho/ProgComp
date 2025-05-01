function ex00(){
    let nota;
    let count = 1;
    let soma = 0;
    
    while(count <= 4){
        nota = Number(prompt(`Informe a nota ${count}: `));
        soma += nota;
        count++;
    }
    let media = soma / 4;
    alert(`A média das notas é: ${media.toFixed(2)}`);
    if(media >= 6){
        alert(`Aprovado!`);
    } else {
        alert(`Reprovado, estude mais!`);
    }
}