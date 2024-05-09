describe("test for recording the voice samples", () => {
    let userData = {};

  beforeEach(() => {
    cy.setCookie('token', 'token here');
    cy.setCookie('uid', 'userId');
    cy.visit('/dashboard');
    cy.viewport(1250, 1050);
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke('getState')
      .its('user')
      .then(($st) => {
        userData = $st;
      });
  });

  it("visit the voice record page", () => {
     cy.visit("/dashboard/ai-voice")

     
  })
}) 