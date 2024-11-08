describe('Calculadora de cadenas', () => { 
    beforeEach(() => {
        cy.visit('http://localhost:1234/index.html');
    });

    it('debería retornar 0 para una cadena vacía', () => {
        cy.window().then((win) => {
            expect(win.add('')).to.equal(0);
        });
    });

    it('debería retornar 1 si el valor en la cadena es uno', () => {
        cy.window().then((win) => {
            expect(win.add('1')).to.equal(1);
        });
    });

    it('debería retornar 3 para la cadena "1,2"', () => {
        cy.window().then((win) => {
            expect(win.add('1,2')).to.equal(3);
        });
    });

    it('debería retornar 7 para la cadena "1-2,4"', () => {
        cy.window().then((win) => {
            expect(win.add('1-2,4')).to.equal(7);
        });
    });

    // Pruebas con delimitador personalizado
    it('debería retornar 17 para "//[;]\n6;7;4"', () => {
        cy.window().then((win) => {
            expect(win.add('//[;]\n6;7;4')).to.equal(17);
        });
    });

    it('debería retornar 12 para "//[;]\n6,3-2;1"', () => {
        cy.window().then((win) => {
            expect(win.add('//[;]\n6,3-2;1')).to.equal(12);
        });
    });
});
