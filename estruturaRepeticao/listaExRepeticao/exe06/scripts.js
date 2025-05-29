function loja(){
    let totalV = 0;
    let totalP = 0;
    let valor;
    
    for(let i = 1; i <= 2; i++){
        while(true){
            valor = Number(prompt(`Informe o valor da ${i}ª compra`));
            if(!isNaN(valor) && valor > 0){
                break;
            } else{
                alert(`Valor inválido! Insira novamente.`)
            }
        }
        while(true){
            let codigo = String(prompt(`Informe o código da transação\n[V] - a vista\n[P] - a prazo`).toUpperCase())
            if (codigo === `V` || codigo === `P`){
                if (codigo === `V`){
                    totalV += valor;
                } else if (codigo === `P`){
                    totalP += valor;
                }
                break;
            } else{
                alert(`Código inválido! Insira novamente.`)
            }
        }
    }
    alert(`Valor total das compras à vista: R$${totalV.toFixed(2)}\n` + `Valor total das compras a prazo: R$${totalP.toFixed(2)}\n` + `Valor total das compras efetuadas: R$${(totalV+totalP).toFixed(2)}\n` + `Valor da primeira prestação das compras a prazo: R$${(totalP/3).toFixed(2)}`
    )
}
