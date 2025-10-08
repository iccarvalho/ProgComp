function cadastroInicial(vetor){
    vetor.push({nome: "Ana", idade: 20, curso: "Sistemas de Informação"});
    vetor.push({nome: "Carlos", idade: 22, curso: "Sistemas de Informação"});
    vetor.push({nome: "Beatriz", idade: 19, curso: "Sistemas de Informação"});
}

function listarNomes(vetor){
    for(let aluno of vetor){
        console.log(aluno.nome);
    }
}

function aumentarIdade(vetor){
    for(let aluno of vetor){
        aluno.idade += 1;
    }
}

function cadastrarAluno(vetor){
    let aluno = {
        nome: prompt("Informe o nome do aluno"),
        idade: Number(prompt("Informe a idade do aluno")),
        curso: prompt("Informe o curso do Aluno")
    }
    vetor.push(aluno)
}

function removerAluno(vetor){
    let nome = prompt("Informe o nome do aluno que deseja remover").trim()
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i].nome === nome){
            vetor.splice(i, 1);
            console.log("Aluno removido com sucesso!");
            return;
        }
    }
    console.log("Aluno não encontrado")
}

function main(){
    let alunos = [];
    cadastroInicial(alunos);
    let opcao;
    do{
        opcao = Number(prompt("1 - cadastrar aluno\n2 - listar nomes dos alunos\n3 - para atualizar idade\n4 - Remover aluno\n5 - sair"))
        switch(opcao){
            case 1:
                cadastrarAluno(alunos);
                break;
            case 2:
                listarNomes(alunos);
                break;
            case 3:
                aumentarIdade(alunos);
                break;
            case 4:
                removerAluno(alunos);
                break;
            case 5:
                console.log("Programa encerrado");
                break;
            default:
                console.log("Opção inválida");
                break;
        }
    }while(opcao != 4)
    console.log(alunos)
}

main()