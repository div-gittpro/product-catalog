describe('Product Catalog E2E Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should display five products on initial load', () => {
    cy.get('[data-cy="product-item"]').should('have.length', 5);
  });

  it('should filter products using search input', () => {
    cy.get('[data-cy="search-input"]').type('Wireless Mouse');
    cy.get('[data-cy="product-item"]').should('have.length', 1);
    cy.contains('Wireless Mouse').should('be.visible');
  });

  it('should open product details modal', () => {
    cy.contains('Wireless Mouse').click();
    cy.get('[data-cy="product-modal"]').should('be.visible');
  });

  it('should close the product details modal', () => {
    cy.contains('Wireless Mouse').click();
    cy.get('[data-cy="close-modal"]').click();
    cy.get('[data-cy="product-modal"]').should('not.exist');
  });

});
