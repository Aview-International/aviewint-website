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
