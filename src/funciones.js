const add = (numbers) => {
    if (numbers === '') return 0;
    return parseInt(numbers);
};

// Asigna `add` al objeto global `window` si está definido
if (typeof window !== 'undefined') {
    window.add = add;
}

console.log('Funciones.js cargado'); // Para verificar que se cargó correctamente
