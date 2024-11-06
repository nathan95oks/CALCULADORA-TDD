const add = (numbers) => {
    if (numbers === '') return 0;
    const numsArray = numbers.split(/,|-/).map(num => parseInt(num.trim(), 10));
    return numsArray.reduce((acc, curr) => acc + curr, 0);
};

const calcularCadena = (cadena) => {
    if (cadena.startsWith('//')) {
        const [delimiterPart, numbersPart] = cadena.split('\n');
        const delimiter = delimiterPart.replace('//[', '').replace(']', '');
        return add(numbersPart.split(delimiter).join(','));
    }

    return add(cadena);
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { add, calcularCadena };
}

if (typeof window !== 'undefined') {
    window.add = add;
}