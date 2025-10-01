function main(){
    let num = Number(prompt(`Digite um número inteiro`));
    console.log(`O dobro de ${num} é ${mostrarDobro(num)}`);
    let quadrado = calcularQuadrado(num);
    console.log(`O quadrado de ${num} é ${quadrado}`)
}

function mostrarDobro(x){
    return x *2;
}

function calcularQuadrado(x){
    return x ** 2;
}

main()