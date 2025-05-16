function exe01() {
    let a, b, c, d, aux;
    let grupo = 1;

    while (grupo <= 5) {
        let count = 1;
        a = Number(prompt(`Informe o valor de A`))
        b = Number(prompt(`Informe o valor de B`))
        c = Number(prompt(`Informe o valor de C`))
        d = Number(prompt(`Informe o valor de D`))

        alert(`Ordem informada: ${a}, ${b}, ${c} e ${d}`);

        while(count <= 3) {
            if (a>b) {
                aux = a; a = b; b = aux;
            }
            if (b>c) {
                aux = b; b = c; c = aux;
            }
            if (c>d) {
                aux = c; c = d; d = aux;
            }
            count++;
        }
        alert(`Ordem crescente: ${a}, ${b}, ${c} e ${d}\n` + `Ordem decrescente: ${d}, ${c}, ${b} e ${a}`);
        grupo++;
    }
}