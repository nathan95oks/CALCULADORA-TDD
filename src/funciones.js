const add = (numbers) => {
    if (numbers === '') return 0;

    let numsArray = numbers.split(/,|-/).map(num => parseInt(num.trim(), 10));

    numsArray = numsArray.filter(num => num >= 0 && num < 1000);

    return numsArray.reduce((acc, curr) => acc + curr, 0);
};

const calcularCadena = (cadena) => {
    return add(cadena);
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { add, calcularCadena };
}

if (typeof window !== 'undefined') {
    window.add = add;
    window.calcularCadena = calcularCadena;
}