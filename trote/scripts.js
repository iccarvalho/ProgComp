function calcular(){
    // declaração de variável
    let soma = 0;
    let equipe = document.getElementById("equipe").value // recupera a cor da equipe

    let acaoSocial = Number(document.getElementById("acaoSocial").value); // recupera o valor da ação social digitado
    soma += acaoSocial;
    let homenagem = Number(document.getElementById("homenagem").value); // recupera o valor da ação social digitado
    soma += homenagem;
    let leite = Number(document.getElementById("leite").value)*2;
    soma += leite
    let kit = Number(document.getElementById("kit").value);
    let suplemento = Number(document.getElementById("suplemento").value);
    let pontosKitSupl = 0
    if (equipe == "Laranja") { // equipe laranja
        if (kit >= 97 && suplemento >= 49) {
            pontosKitSupl += 5000 + ((kit-97) *30) + ((suplemento-49)*15); // pontuação do kit e suplamento
        } else if (kit >= 78 && suplemento >= 39) {
            pontosKitSupl += 4000 + ((kit-78) *30) + ((suplemento-39)*15); // pontuação do kit e suplemento
        } else if (kit >= 49 && suplemento >= 25) {
            pontosKitSupl += 2500 + ((kit-49) *30) + ((suplemento-25)*15); // pontuação do kit e suplemento
        } else if (kit >= 19 && suplemento >= 10) {
            pontosKitSupl += 1000 + ((kit-19) *30) + ((suplemento-10)*15); // pontuação do kit e suplemento
        } else {
            pontosKitSupl += kit*30 + suplemento*15
        }
    }
    alert(pontosKitSupl)
    soma += pontosKitSupl

    let arroz = Number(document.getElementById("arroz").value);
    soma += arroz;
    let feijao = Number(document.getElementById("feijao").value);
    soma += feijao;
    let macarrao = Number(document.getElementById("macarrao").value)*0.5;
    soma += macarrao;
    let oleo = Number(document.getElementById("oleo").value);
    soma += oleo;

    document.getElementById("soma").innerHTML = soma.toFixed(2); // devolve o resultado para o HTML
}