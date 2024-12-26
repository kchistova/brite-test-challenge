import '../support/commands'

beforeEach(() => {
  cy.visitHomePage();
  cy.acceptCookies();
});

// Go to IMDb.com, search for Nicolas Cage and access his profile; then unfold the Upcoming tab in the Credits section,
// and click on the first movie with a Completed tag.
// TODO: make sure that this scenario is working on Chrome and Firefox.
describe('Nicolas Cage Profile and Upcoming Movies', () => {
  it('nicolas - should navigate to Nicolas Cage profile and access upcoming movies', { tags: 'nicolas' }, () => {
    cy.get('input[name="q"]').type('Nicolas Cage');
    cy.get('button[type="submit"]').click();
    cy.contains('Nicolas Cage').click();

    cy.contains('Upcoming').click();
    cy.get('#accordion-item-actor-upcoming-projects ul')
      .find('li')
      .filter(':has(:contains("Completed"))')
      .first()
      .click();
    cy.get('.ipc-metadata-list__item').contains('Nicolas Cage').should('be.visible');
  });
});

// Go to IMDb.com, unfold the Menu and navigate to the Top Box Office section;
// then click on the 2nd item on the Top box office list;
// then click on the IMDb Rating button, click on the Rate button, and set a 5 stars Rating and click on the Rate button in the modal.
describe('Top Box Office Navigation and Rating Test', () => {
  it('should navigate to Top Box Office and attempt to rate a movie', () => {
    cy.unfoldMenu();
    cy.contains('Top Box Office').click();
    // click on the 2nd item on the Top box office list
    cy.get('.ipc-metadata-list-summary-item').eq(1).find('a').first().click();
    cy.get('[data-testid="hero-rating-bar__aggregate-rating"]').find('a').contains('10').click();

    cy.get('button.ipc-btn:nth-child(2)').click();
    cy.get('.ipc-starbar').should('be.visible');
    cy.get('button.ipc-starbar__rating__button:nth-child(5)').click({force: true});
    cy.get('button.ipc-btn--core-accent1').should('be.enabled').click();

    cy.get('#signin-options').should('be.visible');
  });
});

// Go to IMDb.com, unfold the Menu button, and navigate to the Top 250 TV Shows section;
// then click on Breaking Bad, go to the Photos, display only Danny Trejo's photos,
// and then click on the 2nd photo in the list.
describe('Top 250 TV Shows Navigation and Photo Display Test', () => {
  it('should navigate to Top 250 TV Shows and display Danny Trejo\'s photos', () => {
    cy.unfoldMenu();
    cy.contains('Top 250 TV Shows').click();
    cy.contains('Breaking Bad').click();
    cy.contains('Photos').click();
    cy.get('.ipc-icon--grid-view').click();

    cy.get('.ipc-chip-dropdown__chip').click();
    // select Danny Trejo from dropdown list and value can not match Danny Trejo
    cy.get('#Person-filter-select-dropdown').find('option')
      .contains('Danny Trejo')
      .then((option) => {
        const value = option.val();
        cy.get('#Person-filter-select-dropdown').select(value);
    });

    cy.get('[data-testid="filter-menu-chip-nm0001803"]').should('contain', 'Danny Trejo');
    cy.get('.ipc-promptable-base__close > button:nth-child(1)').click();

    cy.wait(1000);
    cy.get('.sc-d26c5ca5-0 a').eq(1).should('be.visible').click();
    // Dennys photo should be visible
    cy.get('.ipc-html-content-inner-div').should('contain', 'Danny Trejo');
  });
});

// Go to IMDb.com, unfold the Menu button and navigate to the Born today section;
// delete default search, then unfold Birthday and search for Celebrities born yesterday.
// Click on the 3rd name in the list and take a screenshot.
describe('Born Today Section Navigation and Search Test', () => {
  it('should navigate to Born Today section and search for Celebrities born yesterday', () => {
    //get today date in format MM-DD
    const today = new Date()
      .toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })
      .replace('/', '-');
    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1))
      .toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })
      .replace('/', '-');
  
    cy.unfoldMenu();
    cy.contains('Born Today').click();
    cy.get(`[data-testid="selected-input-chip-list-birthday-${today}"]`)
      .should('exist')
      .and('be.visible')
      .click();
    cy.get('[data-testid="accordion-item-birthdayAccordion"]').click();

    cy.get('[data-testid="birthday-input-test-id"]').type(`${yesterday}{enter}`);
    cy.get('[data-testid="adv-search-get-results"]').click();
    cy.get('.ipc-metadata-list-summary-item')
      .eq(2)
      .find('a')
      .first()
      .click();
    cy.get('[data-testid="hero__pageTitle"]').should('be.visible');
    cy.screenshot('celebrity-born-yesterday-screenshot');
  });
});

// Go to IMDb.com, unfold the Menu button and navigate to the Born today section; delete default search,
// then unfold Birth date and search for Celebrities born the same day as today but exactly 40 years ago.
// On the 1st result in the list, click on the 1st link you can find on the description (if any) and take a screenshot.
describe('Born Today Section Navigation and Search Test', () => {
  it('should navigate to Born Today section and search for Celebrities born the same day as today but exactly 40 years ago', () => {
    const today = new Date()
      .toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })
      .replace('/', '-');
    const fortyYearsAgo = new Date(new Date()
      .setFullYear(new Date()
      .getFullYear() - 40))
      .toISOString()
      .split('T')[0];

    cy.unfoldMenu();
    cy.contains('Born Today').click();

    // delete default search
    cy.get(`[data-testid="selected-input-chip-list-birthday-${today}"]`)
      .should('exist')
      .and('be.visible')
      .click();

    // unfold Birth date
    cy.get('[data-testid="accordion-item-birthDateAccordion"]').click();

    // search for Celebrities born the same day as today but exactly 40 years ago
    cy.get('[data-testid="birthDate-start"]').type(`${fortyYearsAgo}`);
    cy.get('[data-testid="birthDate-end"]').type(`${fortyYearsAgo}`);
    cy.get('[data-testid="adv-search-get-results"]').should('be.visible').click();

    // click on the first link (if any) in the search results
    cy.get('.ipc-metadata-list')
      .eq(0)
      .find('a')
      .first()
      .click();
    cy.get('[data-testid="hero__pageTitle"]').should('be.visible');
    cy.screenshot('celebrity-born-40-years-ago-screenshot');
  });
});
