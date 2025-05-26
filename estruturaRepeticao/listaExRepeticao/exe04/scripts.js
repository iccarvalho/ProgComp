function tabuada(){
    let num = Number(prompt(`Informe um número para ver sua tabuada`));
    let tabuada = ``

    for(let i = 0; i <= 10; i++){
        tabuada+= `${num} x ${i} = ${num*i}\n`
    }
    
    alert(tabuada)
}