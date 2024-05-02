// import { auth } from '../../pages/api/firebase';

describe('Testing the dashboard', () => {
  let userData = {};

  before(() => {
    // cy.stub(auth, 'onAuthStateChanged').callsFlake((callback) => {
    //   callback({ uid: 'userId' });
    //   console.log(
    //     'we are on the beforeEach hook to call before dashbaord request'
    //   );

    //   return () => {};
    // });
    cy.setCookie(
      'token',
      'token'
    );
    cy.setCookie('uid', 'uid');
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

  it('welcome dashboard test', () => {
    cy.contains('Welcome to your Aview Dashboard');
  });

  it('dashboard sidebar tests', () => {
    cy.get('[data-test="profile-picture"]').should('be.visible');
    cy.get('[data-test="role"]').should('be.equal', userData.role);
    cy.get('[data-test="sidebar-text"]')
       .then((items) => {
        const textsArray = Array.from(items, ($item) => $item.text()); // Extract the texts into an array
        const expectedTexts = ['Home', 'Upload', 'Assistance', 'AI Voice', 'History', 'Settings', 'Sign Out'];  // Define the expected texts
        expectedTexts.forEach((text) => {
          expect(textsArray).to.include(text); // Assert that each expected text is present in the array
        });
      });
    cy.get('[data-test="dashboard-open-icon"]').click()
    cy.get('[data-test="profile-picture"]').should('not.be.visible');
  });

  it('dashboard header tests', () => {
    cy.clock(new Date('2023-05-02T08:00:00').getTime());
    cy.get('[data-test="sidebar-text"]').contains('Good Morning')
    cy.clock(new Date('2023-05-02T14:00:00').getTime());
    cy.get('[data-test="sidebar-text"]').contains('Good Afternoon')
    cy.clock(new Date('2023-05-02T19:00:00').getTime());
    cy.get('[data-test="sidebar-text"]').contains('Good Evening')
    cy.clock(new Date('2023-05-02T23:00:00').getTime());
    cy.get('[data-test="sidebar-text"]').contains("Can't Sleep?")
    //cy.get('[data-test="role"]').should('be.equal', userData.userName);
    cy.contains('Welcome to your Aview Dashboard');
    cy.contains('Messages')
  });
});
