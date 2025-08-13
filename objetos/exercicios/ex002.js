function cadastro(){
    let cadastro = [];

    for(let i = 0; i < 6; i++){

        let nome = String(prompt(`Informe o nome do ${i+1}º funcionário`))
        let cargo = String(prompt(`Informe o cargo do ${i+1}º funcionário`).toLowerCase())
        let salario = Number(prompt(`Informe o salário do ${i+1}º funcionário`))
        let tempo = Number(prompt(`Informe o tempo de serviço do ${i+1}º funcionário`))

        let funcionario = {
            nome: nome,
            cargo: cargo,
            salario: salario,
            tempo: tempo
        }
        cadastro.push(funcionario);
    }
    let maiorSalario = cadastro[0];
    let media = 0;
    let contGerente = 0
    
    for(let i = 0; i < 6; i++){
        
        if(cadastro[i].salario > 5000 && cadastro[i].tempo > 5){
            console.log(cadastro[i].nome);
        }
        
        if(cadastro[i].salario > maiorSalario.salario){
            maiorSalario = cadastro[i];
        }
        
        if(cadastro[i].cargo === "gerente"){
            contGerente++;
        }
        media += cadastro[i].salario
    }
    
    console.log(`\nFuncionário com maior salário: ${maiorSalario.salario}`)
    console.log(`\nMédia salarial da empresa: ${media / 6}`)
    console.log(`\nQuantidade de gerentes da empresa: ${contGerente}`)
}