document.getElementById('calculateBtn').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    const result = calcularCadena(input);  
    document.getElementById('result').textContent = result;
});