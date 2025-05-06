function ex00(){
    let nota;
    let count = 1;
    let soma = 0;
    
    while(count <= 6){
        nota = Number(prompt(`Informe a nota ${count}:`));
        soma += nota;
        count++; // incrementa 1
    }
    let media = soma / 6;
    alert(`A média das notas é: ${media.toFixed(1)}`);
    if(media >= 6){
        alert(`Aprovado!`);
    } else {
        alert(`Reprovado, estude mais!`);
    }
}