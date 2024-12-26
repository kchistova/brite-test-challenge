const BASE_URL = 'https://pokeapi.co/api/v2/';

const getRandomArrayElement = (array) => array[Math.floor(Math.random() * array.length)];
const getRandomId = (maxId) => Math.floor(Math.random() * maxId) + 1;

describe('Poke API Tests', () => {
  let berriesList = [];
  let berriesCount = 0;
  let berryFlavors = [];

  before(() => {
    cy.request(`${BASE_URL}berry/`).then((response) => {
      expect(response.status).to.eq(200);
      berriesList = response.body.results;
      berriesCount = response.body.count;
    });

    cy.request(`${BASE_URL}berry-flavor/`).then((response) => {
      expect(response.status).to.eq(200);
      berryFlavors = response.body.results;
    });
  });

  describe('Berry Tests', () => {
    it('should get a valid berry by ID', () => {
      const randomBerryId = getRandomId(berriesCount);
      cy.request(`${BASE_URL}berry/${randomBerryId}/`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(randomBerryId);
      });
    });

    it('should return 404 for an invalid berry ID', () => {
      const invalidBerryId = berriesCount + 1;
      cy.request({ url: `${BASE_URL}berry/${invalidBerryId}/`, failOnStatusCode: false }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });

    it('should get a valid berry by name', () => {
      const randomBerryName = getRandomArrayElement(berriesList).name;
      cy.request(`${BASE_URL}berry/${randomBerryName}/`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(randomBerryName);
      });
    });

    it('should return 404 for an invalid berry name', () => {
      const invalidBerryName = 'invalidberryname';
      cy.request({ url: `${BASE_URL}berry/${invalidBerryName}/`, failOnStatusCode: false }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });

  describe('Berry Flavor Tests', () => {
    it('should get a valid berry flavor by name', () => {
      const randomFlavorName = getRandomArrayElement(berryFlavors).name;
      cy.request(`${BASE_URL}berry-flavor/${randomFlavorName}/`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(randomFlavorName);
      });
    });

    it('should get the berry with the highest potency for a specific flavor', () => {
      cy.request(`${BASE_URL}berry-flavor/spicy`).then((response) => {
        expect(response.status).to.eq(200);
        const berryWithHighestPotency = response.body.berries.sort((a, b) => b.potency - a.potency)[0].berry.name;
        cy.request(`${BASE_URL}berry/${berryWithHighestPotency}/`).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.name).to.eq(berryWithHighestPotency);
        });
      });
    });
  });
});
