function main(){
    let cidades = [];
    carregarCidades(cidades);
    console.log(cidades);
    padronizarNomes(cidades);
    console.log(cidades)
    marcarInterior(cidades);
    console.log(cidades);
}

function carregarCidades(lista){
    lista.push("São Paulo", "Campinas", "Santos", "Sorocaba", "Caraguatatuba")
}

function padronizarNomes(lista){
    for(let i = 0; i < lista.length; i++){
        lista[i] = lista[i].toUpperCase();
    }
}

function marcarInterior(lista){
    for(let i = 0; i < lista.length; i++){
        if(lista[i][0] == "C"){
            lista[i] = `INTERIOR - ${lista[i]}`
        }
    }
}

main()