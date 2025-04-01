function calcular(){
    // declaração de variável
    let soma = 0;
    let equipe = document.getElementById("equipe").value; // recupera a cor da equipe

    let acaoSocial = Number(document.getElementById("acaoSocial").value); // recupera o valor da ação social digitado
    soma += acaoSocial;
    let homenagem = Number(document.getElementById("homenagem").value); // recupera o valor da ação social digitado
    soma += homenagem;
    let leite = Number(document.getElementById("leite").value);
    soma += leite*2;
    let arroz = Number(document.getElementById("arroz").value);
    soma += arroz;
    let feijao = Number(document.getElementById("feijao").value);
    soma += feijao;
    let macarrao = Number(document.getElementById("macarrao").value);
    soma += macarrao*0.5;
    let oleo = Number(document.getElementById("oleo").value);
    soma += oleo;

    let kit = Number(document.getElementById("kit").value);
    let supl = Number(document.getElementById("supl").value);
    let pontosKitSupl = 0
    if (equipe == "Laranja") { // equipe laranja
        if (kit >= 97 && supl >= 49) {
            pontosKitSupl = 5000 + ((kit-97)*30) + ((supl-49)*15); // pontuação do kit e suplamento
        } else if (kit >= 78 && supl >= 39) {
            pontosKitSupl = 4000 + ((kit-78)*30) + ((supl-39)*15); // pontuação do kit e suplemento
        } else if (kit >= 49 && supl >= 25) {
            pontosKitSupl = 2500 + ((kit-49)*30) + ((supl-25)*15); // pontuação do kit e suplemento
        } else if (kit >= 19 && supl >= 10) {
            pontosKitSupl = 1000 + ((kit-19)*30) + ((supl-10)*15); // pontuação do kit e suplemento
        } else {
            pontosKitSupl = kit*30 + supl*15;
        }
    } else if (equipe == "Preta") { // equipe preta
        if (kit >= 103 && supl >= 52) {
            pontosKitSupl = 5000 + ((kit-103)*30) + ((supl-52)*15);
        } else if (kit >= 82 && supl >= 42) {
            pontosKitSupl = 4000 + ((kit-82)*30) + ((supl-42)*15);
        } else if (kit >= 52 && supl >= 26) {
            pontosKitSupl = 2500 + ((kit-52)*30) + ((supl-26)*15);
        } else if (kit >= 21 && supl >+ 10) {
            pontosKitSupl = 1000 + ((kit-21)*30) + ((supl-10)*10);
        } else {
            pontosKitSupl = kit*30 + supl*15;
        }
    }
    alert(pontosKitSupl)
    soma += pontosKitSupl // soma a pontuação do kit e suplemento a pontuação total

    document.getElementById("soma").innerHTML = soma.toFixed(2); // devolve o resultado para o HTML
}