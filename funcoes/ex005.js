function cadastroInicial(vetor){
    vetor.push({nome: "Gustavo", cargo: "Gerente", salario: 7000});
    vetor.push({nome: "Augusto", cargo: "Técnico", salario: 3000});
    vetor.push({nome: "Pedro", cargo: "Diretor", salario: 12000});
}

function cadastrarFuncionario(vetor){
    let funcionario = {
        nome: prompt("Informe o nome do funcionário"),
        cargo: prompt("Informe o cargo do funcionário"),
        salario: Number(prompt("Informe o salário do funcionário")).toFixed(2)
    };
    vetor.push(funcionario);
}

function listarFuncionarios(vetor){
    for(let funcionario of vetor){
        console.log(funcionario.nome);
    }
}

function aumentarSalario(vetor){
    for(let funcionario of vetor){
        funcionario.salario *= 1.1;
    }
}

function buscarSalario(vetor){
    let nome = prompt("Informe o nome do funcionário para saber seu salário");
    for(let i = 0; i < vetor.length; i++){
        if(nome === vetor[i].nome){
            console.log(`Salário do ${nome}: R$${vetor[i].salario}`);
            return; 
        }
    }
    return "Funcionário não encontrado";
}

function atualizarCargo(vetor){
    let nome = prompt("Informe o nome do funcionário que deseja atualizar seu salário");
    for(let i = 0; i < vetor.length; i++){
        if(nome === vetor[i].nome){
            vetor[i].cargo = prompt("Informe o novo cargo do funcionário")
            return "Cargo atualizado!";
        }
    }
    return "Funcionário não encontrado";
}

function removerFuncionario(vetor){
    let nome = prompt("Informe o nome do funcionário que deseja remover");
    for(let i = 0; i < vetor.length; i++){
        if(nome === vetor[i].nome){
            vetor.splice(i, 1);
            return "Funcionário removido com sucesso!";
        }
    }
    return "Funcionário não encontrado";
}

function mediaSalarial(vetor){
    let soma = 0;
    for(let funcionario in vetor){
        soma += funcionario.salario;
    }
    let media = soma / vetor.length;
    console.log(`Média salarial da empresa: R$${media.toFixed(2)}`);
}

function promoverFuncionario(vetor){
    let soma = 0;
    for(let funcionario in vetor){
        soma += funcionario.salario;
    }
    let media = soma / vetor.length;

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i].salario < media){
            vetor[i].cargo = "Analista Júnior";
            vetor[i].salario *= 1.15
        }
    }
}

function MaiorSalario(vetor){
    let maiorSalario = vetor[0].salario;
    let posicaoFuncionario
    for(let i = 0; i < vetor.length; i++){
        if(maiorSalario < vetor[i].salario){
            maiorSalario = vetor[i].salario;
            posicaoFuncionario = i;
        }
    }
    console.log(`O funcionário ${vetor[posicaoFuncionario].nome} possui o maior salário da empresa. R$${maiorSalario.toFixed(2)}`)
}

function main(){
    let funcionarios = [];
    cadastroInicial(funcionarios);

    let opcao;
    do{
        opcao = Number(prompt("   MENU   \n1 - Cadastrar novo funcionário\n2 - Listar todos os nomes dos funcionários\n3 - Aumentar salário de todos em 10%\n4 - Buscar salário pelo nome\n5 - Atualizar cargo de funcionário\n6 - Remover funcionário pelo nome\n7 - Exibir média salarial da empresa\n8 - Promover funcionários que recebem abaixo da média\n9 - Exibir o funcionário com maior salário da empresa\n10 - Encerrar o programa"));

        switch(opcao){
            case 1:
                cadastrarFuncionario(funcionarios);
                break;
            case 2:
                listarFuncionarios(funcionarios);
                break;
            case 3:
                aumentarSalario(funcionarios);
                break;
            case 4:
                buscarSalario(funcionarios);
                break;
            case 5:
                atualizarCargo(funcionarios);
                break;
            case 6:
                removerFuncionario(funcionarios);
                break;
            case 7:
                mediaSalarial(funcionarios);
                break;
            case 8:
                promoverFuncionario(funcionarios);
                break;
            case 9:
                MaiorSalario(funcionarios);
                break;
            case 10:
                console.log("Programa encerrado");
                break;
            default:
                console.log("Opção inválida!");
                break;

        }
    }while(opcao != 10)

    console.table(funcionarios)
}

main()