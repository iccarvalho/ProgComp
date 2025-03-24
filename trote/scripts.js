function calcular(){
    // declaração de variável
    let acaoSocial = document.getElementById("acaoSocial").value // recupera o valor da ação social digitado
    let homenagem = document.getElementById("homenagem").value // recupera o valor da ação social digitado
    let soma = Number(acaoSocial) + Number(homenagem) // soma os valores
    alert(soma)
}