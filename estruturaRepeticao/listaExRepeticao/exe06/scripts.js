function loja(){
    let totalV = 0
    let totalP = 0
    let codigo = ""
    
    for(i = 1; i <= 15; i++){
        codigo = prompt(`Informe o código da transação\nV - a vista\nP - a prazo`)
        if(codigo === "V"){
            totalV += Number(prompt(`Informe o valor da transação`))
        } else if(codigo === "P"){
            totalP += Number(prompt(`Informe o valor da transação`))
        } else {
            alert(`Código inválido!`)
            continue
        }
    }
    alert(`Valor total das compras à vista: ${totalV}\n` +
        `Valor total das compras a prazo: ${totalP}\n` +
        `Valor total das compras efetuadas: ${totalV+totalP}\n` +
        `Valor da primeira prestação das compras a prazo: ${totalP/3}`
    )
}