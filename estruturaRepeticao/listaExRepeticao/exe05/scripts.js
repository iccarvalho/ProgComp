function tabuada(){
    let tabuada = ``

    for(let num = 1; num <= 10; num++){
        for(let i = 0; i <= 10; i++){
            tabuada+= `${num} x ${i} = ${num*i}\n`
        }
        tabuada+= `---------------\n`
    }
    console.log(tabuada)
}