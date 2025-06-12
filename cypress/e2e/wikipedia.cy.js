describe('wikipedia search', () => {
  it('loads Arnold Schwarzenegger page', () => {
    cy.viewport(1980, 1080)

    cy.visit('https://en.wikipedia.org/wiki/Main_Page')

    cy.get('form#searchform')
      .within(() => {
        cy.get('input#searchInput')
          .type('Arnold Schwarzenegger');
        
        cy.get('button')
          .click();
      });

    cy.get('h1')
      .should('contains.text', 'Arnold Schwarzenegger')
  })
})