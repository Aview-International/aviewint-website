describe('test for recording the voice samples', () => {
  let userData = {};

  beforeEach(() => {
    cy.setCookie('token', '');
    cy.setCookie('uid', '');
    cy.visit('/dashboard');
    cy.viewport(1250, 1050);
  });

  it('visit the voice record page', () => {
    cy.visit('/dashboard/ai-voice');
  });
});
