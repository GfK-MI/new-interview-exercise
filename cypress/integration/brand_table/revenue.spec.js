/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    });

    it('WHEN I load the brand table, THEN the table contains 5 rows', () => {
        cy.get('.MuiTableBody-root')
          .find('tr')
          .should('have.length', 5)
    });
});