function calcular(){
    // declaração de variável
    let acaoSocial = Number(document.getElementById("acaoSocial").value) // recupera o valor da ação social digitado
    let homenagem = Number(document.getElementById("homenagem").value) // recupera o valor da ação social digitado
    let leite = Number(document.getElementById("leite").value)*2
    let kitAvulso = Number(document.getElementById("kitAvulso").value)*30
    let suplAvulso = Number(document.getElementById("suplAvulso").value)*15
    let arroz5 = Number(document.getElementById("arroz5").value)*5
    let arroz = Number(document.getElementById("arroz").value)
    let feijao2 = Number(document.getElementById("feijao2").value)*2
    let feijao = Number(document.getElementById("feijao").value)
    let macarrao = Number(document.getElementById("macarrao").value)*0.5
    let oleo = Number(document.getElementById("oleo").value)

    let soma = acaoSocial + homenagem + leite + kitAvulso + suplAvulso + arroz5 + arroz + feijao2 + feijao + macarrao + oleo// soma os valores
    document.getElementById("soma").innerHTML = soma.toFixed(2) // devolve o resultado para o HTML
}