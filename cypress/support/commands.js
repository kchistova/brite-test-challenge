// visit base url
Cypress.Commands.add('visitHomePage', () => {
    cy.visit('https://imdb.com')
})

// Accept cookies
Cypress.Commands.add('acceptCookies', () => {
    // accept cookies by clicking button.icb-btn:nth-child(2)
    cy.get('button.icb-btn:nth-child(2)').click();
})

// search for a keyword
Cypress.Commands.add('searchForKeyword', (keyword) => {
    cy.get('input[name="q"]').type(keyword);
    cy.get('button[type="submit"]').click();
})

// click on a keyword
Cypress.Commands.add('clickOnKeyword', (keyword) => {
    cy.contains(keyword).click();
})

// unfold a Menu
Cypress.Commands.add('unfoldMenu', () => {
    cy.get('[aria-label="Open Navigation Drawer"]').click();
})