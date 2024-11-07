document.getElementById('calculateBtn').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    console.log("Calculando con cadena:", input);  
    const result = calcularCadena(input);  
    document.getElementById('result').textContent = result;
});


