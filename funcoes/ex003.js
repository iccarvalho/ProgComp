function main(){
    let nomes = ["Ana", "Paulo", "João", "André", "Miguel"];
    console.log(nomes);
    
    maiusculo(nomes);
    console.log(nomes);
    
    anonimos(nomes);
    console.log(nomes);
}

function maiusculo(array){
    for(let i = 0; i < array.length; i++){
        array[i] = array[i].toUpperCase()
    }
}

function anonimos(array){
    for(let i = 0; i < array.length; i++){
        if(array[i][0] == "A"){
            array[i] = "ANÔNIMO"
        }
    }
}

main()