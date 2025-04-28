function calcularPontuacao() {
    let equipe = document.getElementById("equipe").value;
    let soma = 0

    let livros = Number(document.getElementById("livros").value);
    soma += livros*10;
    let acoes = Number(document.getElementById("acoes").value);
    soma += acoes*200;
    let pessoas = Number(document.getElementById("pessoas").value);
    soma += pessoas*5;
    let participacoes = Number(document.getElementById("participacoes").value);
    soma += participacoes;

    let bonus = 0;
    if (equipe == "Azul") {
        if (pessoas > 150 && acoes > 3) {
            bonus = 1000;
        }
    } else if (equipe == "Amarelo") {
        if (livros > 80 && acoes > 6) {
            bonus = (livros-80)*20;
        }
    } else if (equipe == "Verde") {
        if (acoes > 5) {
            bonus = 500;
        }
    } else {
        if (participacoes > 90) {
            bonus = participacoes*1.5;
        }
    }
    soma += bunus;
    soma = document.getElementById("soma").innerHTML;
}