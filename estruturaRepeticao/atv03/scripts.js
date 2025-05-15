function atv03() {
    let count = 1;
    let faixa1 = 0, faixa2 = 0, faixa3 = 0, faixa4 = 0, faixa5 = 0;

    while(count <= 8) {
        let idade = Number(prompt(`Informe a idade da ${count}ª pessoa`));
        if (idade >= 0 && idade <= 15) {
            faixa1++;
        } else if (idade >= 16 && idade <= 30) {
            faixa2++;
        } else if (idade >= 31 && idade <= 45) {
            faixa3++;
        } else if (idade >= 46 && idade <= 60) {
            faixa4++;
        } else if (idade > 60) {
            faixa5++;
        } else {
            alert(`Idade inválida!`);
            continue;
        }
        count++;
    }
    alert(`Quantidade de pessoas em cada faixa etária:\n` + `Até 15 anos: ${faixa1}\n` + `Entre 16 e 30 anos: ${faixa2}\n` + `Entre 31 e 45 anos: ${faixa3}\n` + `Entre 46 e 60: ${faixa4}\n` + `Acima de 60 anos: ${faixa5}`);
    let porcentagemF1 = (faixa1*100)/(faixa1+faixa2+faixa3+faixa4+faixa5)
    let porcentagemF5 = (faixa5*100)/(faixa1+faixa2+faixa3+faixa4+faixa5)

    alert(`Porcentagem de pessoas na 1ª faixa etária: ${porcentagemF1}%\n` + `Porcentagem de pessoas na 5ª faixa: ${porcentagemF5}%`);
}