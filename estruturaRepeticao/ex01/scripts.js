function pesquisaSatisfacao() {
    let nota;
    let satisfeito = 0;
    let insatisfeito = 0;
    let participantes = 10
    let count = 1;
    let soma = 0;

    while (count <= participantes) {
        nota = Number(prompt(`Participante ${count}, avalie o festival de 0 a 10`));
        count++;
        soma += nota
        if (nota >= 8) {
            satisfeito++;
        }
        if (nota < 5) {
            insatisfeito++;   
        }
    }
    let media = soma/10

    alert(`Média das notas: ${media.toFixed(1)}\n` +
        `Total de pessoas satisfeitas: ${satisfeito}\n` +
        `Total de pessoas insatisfeitas: ${insatisfeito}`
    )
}