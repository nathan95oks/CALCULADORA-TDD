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
});