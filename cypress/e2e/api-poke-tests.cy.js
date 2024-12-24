// Make sure we can call https://pokeapi.co/api/v2/berry/{id or name}/ using a valid id, and we get expected response
describe('Get berry by id', () => {
  it('should get a valid response from the Poke API', () => {
    // get a number of berries
    cy.request('https://pokeapi.co/api/v2/berry/').then((response) => {
      expect(response.status).to.eq(200);
      // get a number of berries from the response
      const berriesNumber = response.body.count;
      // get a random berry id from the response [1; 64]
      const randomBerryId = Math.floor(Math.random() * berriesNumber) + 1;
      cy.request(`https://pokeapi.co/api/v2/berry/${randomBerryId}/`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(randomBerryId);
      });
    });
  });
});

// Make sure we can call https://pokeapi.co/api/v2/berry/{id or name}/ using an invalid id, and we get expected response
describe('Get berry by invalid id', () => {
  it('should get an invalid response from the Poke API', () => {
    // get a number of berries
    cy.request('https://pokeapi.co/api/v2/berry/').then((response) => {
      expect(response.status).to.eq(200);
      // get a number of berries from the response
      const berriesNumber = response.body.count;
      // get a random berry id from the interval [65; 129]
      const randomBerryId = Math.floor(Math.random() * berriesNumber) + 1 + berriesNumber;
      cy.request({
        url: `https://pokeapi.co/api/v2/berry/${randomBerryId}/`,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });
});

// Make sure we can call https://pokeapi.co/api/v2/berry/{id or name}/ using a valid name, and we get expected response
describe('Get berry by valid name', () => {
  it('should get a valid response from the Poke API', () => {
    cy.request('https://pokeapi.co/api/v2/berry/').then((response) => {
      expect(response.status).to.eq(200);
      // get a random berry name from the response
      const randomBerryName = response.body.results[Math.floor(Math.random() * response.body.results.length)].name;
      cy.request(`https://pokeapi.co/api/v2/berry/${randomBerryName}/`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(randomBerryName);
      });
    });
  });
});

// Make sure we can call https://pokeapi.co/api/v2/berry/{id or name}/ using an invalid name, and we get expected response
describe('Get berry by invalid name', () => {
  it('should get an invalid response from the Poke API', () => {
    // get a random berry name from the response
    const randomBerryName = 'invalidberryname';
    cy.request({
      url: `https://pokeapi.co/api/v2/berry/${randomBerryName}/`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});

// Make sure we can call https://pokeapi.co/api/v2/berry-flavor/{id or name}/ using a valid name, and we get the expected response.
describe('Get berry flavor by valid name', () => {
  it('should get a valid response from the Poke API', () => {
    cy.request('https://pokeapi.co/api/v2/berry-flavor/').then((response) => {
      expect(response.status).to.eq(200);
      // get a random berry flavor name from the response
      const randomBerryFlavorName = response.body.results[Math.floor(Math.random() * response.body.count)].name;
      cy.request(`https://pokeapi.co/api/v2/berry-flavor/${randomBerryFlavorName}/`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(randomBerryFlavorName);
      });
    });
  });
});

// pick up all the berries with “spicy” flavour, check the name of the one with more “potency”,
// and call https://pokeapi.co/api/v2/berry/{id or name}/ using that info, making sure we get the expected responses.
describe('Get berry with the highest potency', () => {
  it('should get a valid response from the Poke API', () => {
    cy.request('https://pokeapi.co/api/v2/berry-flavor/spicy').then((response) => {
      expect(response.status).to.eq(200);
      // get the name of the berry with the highest potency
      const berryWithHighestPotency = response.body.berries.sort((a, b) => b.potency - a.potency)[0].berry.name;
      cy.request(`https://pokeapi.co/api/v2/berry/${berryWithHighestPotency}/`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(berryWithHighestPotency);
      });
    });
  });
});
