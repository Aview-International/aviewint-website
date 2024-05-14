import { toast } from 'react-toastify';

Cypress.Commands.add('loginByGoogleApi', () => {
  cy.log('Logging in to Google');

  cy.request({
    method: 'POST',
    url: 'https://www.googleapis.com/oauth2/v4/token',
    body: {
      grant_type: 'refresh_token',
      client_id: Cypress.env('googleClientId'),
      client_secret: Cypress.env('googleClientSecret'),
      refresh_token: Cypress.env('googleRefreshToken'),
    },
    failOnStatusCode: false,
  }).then(({ body }) => {
    const { access_token, id_token } = body;

    cy.request({
      method: 'GET',
      url: 'https://www.googleapis.com/oauth2/v3/userinfo',
      headers: { Authorization: `Bearer ${access_token}` },
    }).then(({ body }) => {
      const userItem = {
        token: id_token,
        user: {
          googleId: body.sub,
          email: body.email,
          givenName: body.given_name,
          familyName: body.family_name,
          imageUrl: body.picture,
        },
      };

      cy.setCookie('cypressToken', JSON.stringify(userItem));
    });
  });
});

Cypress.Commands.add('uploadCreatorVideo', (payload, userId, token = '') => {
  cy.wait(2000);
  let formData = new FormData();
  formData.append('video', payload.video);
  formData.append('creatorId', userId);
  formData.append('additionalNote', payload.additionalNote);
  for (const lang of payload.languages) formData.append('languages', lang);
  cy.request({
    method: 'POST',
    url: 'http://localhost:4000/transcription/upload-creator-video',
    body: formData,
    headers: { Authorization: `Bearer ${token}` },
  }).as('uploadVideo');

  cy.get('@uploadVideo').then((body) => {
    toast.success('Tasks submitted succesfully 🚀');
  });
  cy.wait(4000);
});

Cypress.Commands.add('setRedux', (data) => {
  cy.window().then((win) => {
    if (win.Cypress && win.Cypress.store && win.Cypress.store.dispatch) {
      const userState = win.Cypress.store.getState();
      const updatedUserData = {
        ...userState,
        data,
      };

      win.Cypress.store.dispatch({
        type: 'user/setUser',
        payload: updatedUserData,
      });
    }
  });
});

Cypress.Commands.add('checkImage', (alt = '', sub_heading, desc) => {
  if (alt != null) {
    cy.get(`img[alt="${alt}"]`).should('exist').and('be.visible');
  }
  cy.contains(`${sub_heading}`).should('be.visible');
  cy.contains(`${desc}`).should('be.visible');
});

Cypress.Commands.add('checkHeadings', (heading) => {
  cy.contains(`${heading}`).should('exist').and('be.visible');
});

Cypress.Commands.add('checkFaq', (altkey, text) => {
  cy.contains(text).should('not.exist');
  cy.get(`#question${altkey}`).click({ force: true, mutliple: true });
  cy.contains(text).should('exist').and('be.visible');
  cy.get(`question${altkey}`).click({ force: true, mutliple: true });
});

Cypress.Commands.add('checkRange', (val1, val2, val3) => {
  cy.get('input[type=range]')
    .first()
    .as('range1')
    .invoke('val', val1)
    .trigger('change');
  cy.get('@range').siblings('p').should('have.text', `${val1}`);
  cy.get('input[type=range]')
    .first()
    .next()
    .as('range2')
    .invoke('val', val2)
    .trigger('change');
  cy.get('@range2').siblings('p').should('have.text', `${val2}k`);
  cy.get('input[type=range]')
    .last()
    .as('range3')
    .invoke('val', val3)
    .trigger('change');
  cy.get('@range3').siblings('p').should('have.text', `${val3}`);
});

Cypress.Commands.add('scrollView', (element) => {
  cy.get(`#${element}`).scrollIntoView({ easing: 'linear' });
});

Cypress.Commands.add('checkAncher', (id, link) => {
  cy.get(`#${id}`).should('have.attr', 'href').then((href) => {
    expect(href).to.not.be.empty;
    expect(href).to.eq(link);
  });
});

Cypress.Commands.add('goWaitlist', () => {
  cy.get('a')
    .should('have.attr', 'href')
    .then((href) => {
      expect(href).to.not.be.empty;
      expect(href).to.eq('/waitlist');
    });
});

Cypress.Commands.add('languageContainer', (alt = '', desc) => {
  cy.get(`img[alt="${alt}"]`).should('exist').and('be.visible');
  cy.contains(`${desc}`).should('be.visible');
});


//cy.get('button').trigger('mouseover') // yields 'button'
// Main button pressed (usually the left button)
// cy.get('.target').trigger('mousedown', { button: 0 })
// Auxiliary button pressed (usually the middle button)
// cy.get('.target').trigger('mousedown', { button: 1 })
//Secondary button pressed (usually the right button)
// cy.get('.target').trigger('mousedown', { button: 2 })
