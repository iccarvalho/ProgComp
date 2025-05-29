function exe07(){
    let idade;
    let peso;
    let altura;
    let sup50 = 0
    let somaAltura = 0
    let qtdeIdade = 0
    let mediaPeso = 0

    for(let i = 1; i <= 5; i++){
        do{
            idade = Number(prompt(`Informe a idade da ${i}ª pessoa`))
        } while(idade < 0)
        if(idade > 50){
            sup50++
        }
        do{
            altura = Number(prompt(`Informe a altura da ${i}ª pessoa em metros`))
        } while(altura < 0)
        if (idade >= 10 && idade <= 20){
            somaAltura += altura
            qtdeIdade++
        }
        do{
            peso = Number(prompt(`informe o peso da ${i}ª pessoa em kg`))
        } while(peso < 0)
        if(peso < 40){
            mediaPeso++
        }
    }
    window.alert(`Quantidade de pessoas com idade superior a 50 anos: ${sup50}\n` + `Média das alturas das pessoas com idade entre 10 e 20: ${somaAltura/qtdeIdade}\n` + `Porcentagem de pessoas com peso inferior a 40kg: ${(mediaPeso/5)*100}%`)

}