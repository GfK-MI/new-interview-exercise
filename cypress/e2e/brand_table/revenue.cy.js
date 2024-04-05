/// <reference types="cypress" />

context("Brand Leaderboard Table", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000"); // Adjust this URL if your app is hosted elsewhere
  });

  it("WHEN I load the brand table, THEN the table contains at least one row", () => {
    cy.get('table').find("tr").its('length').should('be.gte', 1);
  });
});
