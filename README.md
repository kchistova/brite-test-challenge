# Test Challenge for Brite

This project contains automated tests for IMDb.com and https://pokeapi.co/ using Cypress.

## IMDb Test Automation Project

The test suite includes the following scenarios:

1. **Nicolas Cage Profile and Upcoming Movies**
   - Navigates to Nicolas Cage's profile
   - Accesses his upcoming movies
   - Verifies details of a completed project

2. **Top Box Office Navigation and Rating**
   - Navigates to Top Box Office section
   - Selects the second movie from the list
   - Attempts to rate the movie with 5 stars
   - Verifies sign-in prompt appears

3. **Top 250 TV Shows and Photo Display**
   - Navigates to Top 250 TV Shows
   - Accesses Breaking Bad's photos
   - Filters for Danny Trejo's photos
   - Verifies photo details

4. **Born Today Navigation and Search by birthday**
   - Searches for celebrities born yesterday
   - Takes screenshots of results

5. **Born Today Navigation and Search by Birth date**
   - Searches for celebrities born exactly 40 years ago
   - Takes screenshots of results

## Setup and Running IMDbTests
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd [repository-name]
   ```

2. Ensure you have Node.js installed

3. Install Cypress and other dependencies:
   ```bash
   npm install
   ```

4. To open Cypress Test Runner:
   ```bash
   npx cypress open
   ```
   Then select "E2E Testing" and choose your preferred browser

5. To run tests headlessly from the command line:
   ```bash
   npx cypress run --spec "cypress/e2e/IMDb-tests.cy.js" --browser chrome
   npx cypress run --spec "cypress/e2e/IMDb-tests.cy.js" --browser firefox
   ```

6. To run specific test:
   ```bash
   npx cypress run --spec "cypress/e2e/IMDb-tests.cy.js" --browser firefox --spec "Nicolas Cage Profile and Upcoming Movies"
   ```

Note: Screenshots from the tests will be saved in the `cypress/screenshots` directory.