describe('Startpage', function() {
    it('GlobalSearch available', function () {
        cy.visit('/');
        cy.get('#globalSearch input[type="search"]').should('be.visible');
        cy.focused().should('have.attr', 'type', 'search');
    }),

    it('GlobalSearchTest', function () {
        cy.visit('/');
        cy.get('#globalSearch input[type="search"]').type('Peter').should('have.value', 'Peter');
        cy.get('#globalSearch input[type="search"]').type('{enter}');
        cy.screenshot('globalSearch_result');
    })
})