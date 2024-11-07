const add = (numbers) => {
    if (numbers.trim() === '') return 0;

    let delimiters = /[,\-]/;  // Delimitadores por defecto: coma y guión
    let numbersToProcess = numbers;

    // Verificar si hay un delimitador personalizado
    const customDelimiterMatch = numbers.match(/^\/\/\[(.+?)\]\n/);
    if (customDelimiterMatch) {
        const customDelimiter = customDelimiterMatch[1]; // Extrae el delimitador personalizado
        console.log("Delimitador personalizado encontrado:", customDelimiter);
        
        // Crear una expresión regular que trate el delimitador como literal
        delimiters = new RegExp(`${customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}|,|-`, 'g');
        
        // Eliminar la parte del delimitador de la cadena
        numbersToProcess = numbers.replace(/^\/\/\[(.+?)\]\n/, '');
    }

    console.log("Cadena a procesar después de eliminar delimitador:", numbersToProcess);

    // Separar la cadena usando los delimitadores
    let numsArray = numbersToProcess.split(delimiters).map(num => parseInt(num.trim(), 10));

    // Filtrar números inválidos
    numsArray = numsArray.filter(num => !isNaN(num) && num >= 0 && num < 1000);

    console.log("Array de números después del filtro:", numsArray);

    return numsArray.reduce((acc, curr) => acc + curr, 0);
};

const calcularCadena = (cadena) => {
    return add(cadena);
};

// Exportar para Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { add, calcularCadena };
}

// Exponer para el navegador
if (typeof window !== 'undefined') {
    window.add = add;
    window.calcularCadena = calcularCadena;
}
