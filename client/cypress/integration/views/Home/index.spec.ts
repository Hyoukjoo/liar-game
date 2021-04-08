context('Home View Test', () => {
  describe('In Not Login ', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('should show nickname that is 로그인이 필요합니다.', () => {
      cy.get('p').should('have.text', '로그인이 필요합니다.');
    });

    it('should has one button in not login', () => {
      cy.get('button').should('have.length', 1);
    });

    it('should move to login page on click login button', () => {
      cy.get('button').first().click();

      cy.location('pathname').should('equal', '/account/login');
    });
  });

  describe('In Login', () => {
    beforeEach(() => {
      cy.login();
      cy.visit('/');
    });

    afterEach(() => {
      cy.getCookie('AUTH_TOKEN').then((cookie) => {
        if (cookie !== null) {
          cy.logout();
        }
      });
    });

    it('should has three buttons in login', () => {
      cy.get('button').should('have.length', 3);
    });

    it('should move to create room page on click create room button', () => {
      cy.get('button').first().click();

      cy.location('pathname').should('equal', '/room/create');
    });

    it('should move to join room page on click join room button', () => {
      cy.get('button').first().next().click();

      cy.location('pathname').should('equal', '/room/join');
    });

    it('should logout on click logout button', () => {
      cy.get('button').last().click();

      cy.getCookie('AUTH_TOKEN').should('equal', null);
    });
  });
});
