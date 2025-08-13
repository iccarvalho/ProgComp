function ex003(){
    let cadastro = [];

    for(let i = 0; i < 3; i++){
        let nomeProjeto = String(prompt(`Informe o nome do ${i+1}º projeto`));
        let empresa = String(prompt(`Informe o nome da empresa do ${i+1}º projeto`).toLowerCase());
        let duracaoMeses = Number(prompt(`Informe o a duranção, em meses, do ${i+1}º projeto`));
        let orcamento = Number(prompt(`Informe o orçamento em R$ do ${i+1}º projeto`));

        projeto = {
            nomeProjeto: nomeProjeto,
            empresa: empresa,
            duracaoMeses: duracaoMeses,
            orcamento: orcamento
        }
        cadastro.push(projeto);
    }

    let maiorOrcamento = cadastro[0];
    let media = 0;
    let contInova = 0;
    let gastos = 0;

    console.log(`\nProjetos com duração superior a 12 meses e orçamento acima de R$1.000.000,00:\n`);
    for(let i = 0; i < 3; i++){
        if(cadastro[i].duracaoMeses > 12 && cadastro[i].orcamento > 1000000){
            console.log(cadastro[i]);
        }

        media += cadastro[i].duracaoMeses;

        if(cadastro[i].empresa === "inovatech"){
            contInova++;
        }

        if(cadastro[i].orcamento > maiorOrcamento.orcamento){
            maiorOrcamento = cadastro[i];
        }

        if(cadastro[i].duracaoMeses < 6){
            gastos += cadastro[i].orcamento;
        }
    }
    console.log(`\nNome do projeto com maior orçamento: ${maiorOrcamento.nomeProjeto}\n`);
    console.log(`Média de duração em meses dos projetos: ${(media / 3).toFixed(1)}\n`);
    console.log(`Projetos realizados pela empresa InovaTech: ${contInova}\n`);
    console.log(`Total gasto com projetos com duração menor que 6 meses: R$${gastos.toFixed(2)}`);
}