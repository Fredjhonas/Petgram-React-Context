/* global describe, it, cy */

describe('Petgram Test', () => {
  it('app function', () => {
    cy.visit('/');
  });

  it('category navegation', () => {
    cy.visit('/pet/1');
    cy.get('article');
  });

  it('navbar home navigation', () => {
    cy.visit('/pet/1');
    cy.get('nav a').first().click();
    cy.url().should('include', '/');
  });

  it('User not registered can see register and login form', () => {
    cy.visit('/favs');
    cy.get('form').should('have.length', 1);
  });
});
