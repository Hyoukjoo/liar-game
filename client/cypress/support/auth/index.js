Cypress.Commands.add('login', () => {
  return cy
    .request({
      method: 'POST',
      url: `${Cypress.env('BASE_API_URL')}/auth/login`,
      headers: {},
      body: {
        email: 'test@test.com',
        password: 'test1234!',
      },
    })
    .as('login');
});

Cypress.Commands.add('logout', () => {
  return cy
    .request({
      method: 'POST',
      url: `${Cypress.env('BASE_API_URL')}/auth/logout`,
    })
    .as('logout');
});
