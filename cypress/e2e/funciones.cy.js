describe('Calculadora de cadenas', () => {
    beforeEach(() => {
        cy.visit('file:///C:/Users/LENOVO/Documents/ING-SOFTWARE/CALCULADORA/parcel-jest-base/index.html');
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
});
