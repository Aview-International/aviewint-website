describe('end to end testing for onboarding flow', () => {
  let payload = {
    regions: [],
    languages: [],
  };
  let userData = {};

  beforeEach(() => {
    cy.setCookie(
      'token'
      //here goes the token
    );
    cy.setCookie('uid'); //here goes the token
  });

  const login = (user = 'chandh') => {
    cy.session(
      user,
      () => {
        cy.visit('/login');
        cy.url().should('contain', '/login');
        cy.get('[data-test="login-button"]').should('have.text', 'Log In');
        cy.get('[data-test="signup-button"]')
          .should('have.text', 'here')
          .click();

        cy.url().should('contain', '/register');
        cy.contains('Sign Up').should('exist');
        cy.loginByGoogleApi();
      },
      {
        validate() {
          let userData = {};
          cy.getCookie('cypressToken')
            .should('not.be.empty')
            .then((cookieValue) => {
              userData = JSON.parse(cookieValue.value);
              console.log('user details', userData);
            });
          cy.visit('/dashboard');

          cy.log('user details', userData);
        },
        cacheAcrossSpecs: true,
      }
    );
  };

  //login test
  it('login and sign up page', () => {
    login();
  });

  //for onboardign stage 1
  it('onBoarding stage 1:', () => {
    cy.log('we are on onboarding stage 1');

    cy.visit('/onboarding?stage=1');

    cy.url().should('contain', '/onboarding?stage=1');
    cy.contains('How are you planning to use Aview?');
    cy.contains('We’ll streamline your setup experience accordingly.');

    cy.get('button').contains('Continue').should('be.disabled');

    cy.get('[data-test="myself"]')
      .contains('For myself')
      .should('not.have.class', 'gradient-1')
      .click();

    cy.wait(1000);

    cy.get('[data-test="myself"]').should('have.class', 'gradient-1');

    cy.wait(1000);

    cy.get('button').contains('Continue').should('be.enabled');
  });

  //for onboardign stage 2
  it('onBoarding stage 2:', () => {
    cy.log('we are on onboarding stage 2');
    cy.visit('/onboarding?stage=2');

    cy.wait(2000);
    cy.url().should('contain', '/onboarding?stage=2');

    cy.get('h2').should('have.text', 'Tell us about yourself');
    cy.get('button').contains('Continue').should('be.disabled');

    //for language input
    cy.get('[data-test="language"]')
      .first()
      .click({ force: true, multiple: true });
    cy.get('[data-test="language"]').last().should('be.visible');
    cy.get('[data-test="language"]')
      .last()
      .children()
      .first()
      .find('p')
      .then(($language) => {
        cy.wrap($language).first().click({ force: true, multiple: true });
      });
    cy.get('[data-test="language"]').first().find('p').should('not.be.empty');
    cy.get('[data-test="language"]').last().should('not.be.visible');

    //for views input
    cy.get('[data-test="views"]')
      .first()
      .click({ force: true, multiple: true });
    cy.get('[data-test="views"]').last().should('be.visible');
    cy.get('[data-test="views"]')
      .last()
      .children()
      .first()
      .find('p')
      .then(($views) => {
        cy.wrap($views).first().click({ force: true, multiple: true });
      });
    cy.get('[data-test="views"]').first().find('p').should('not.be.empty');
    cy.get('[data-test="views"]').last().should('not.be.visible');

    //for category input
    cy.get('[data-test="category"]')
      .first()
      .click({ force: true, multiple: true });
    cy.get('[data-test="category"]').last().should('be.visible');
    cy.get('[data-test="category"]')
      .last()
      .children()
      .first()
      .children()
      .then(($category) => {
        cy.wrap($category).first().click({ force: true, multiple: true });
        cy.wrap($category)
          .first()
          .next()
          .click({ force: true, multiple: true });
        cy.get('[data-test="category"]')
          .first()
          .click({ force: true, multiple: true });
      });
    cy.get('[data-test="category"]').first().find('p').should('not.be.empty');
    cy.get('[data-test="category"]').last().should('not.be.visible');

    //for duration input
    cy.get('[data-test="duration"]')
      .first()
      .click({ force: true, multiple: true });
    cy.get('[data-test="duration"]').last().should('be.visible');
    cy.get('[data-test="duration"]')
      .last()
      .children()
      .first()
      .find('p')
      .then(($duration) => {
        cy.wrap($duration).first().click({ force: true, multiple: true });
      });
    cy.get('[data-test="duration"]').first().find('p').should('not.be.empty');
    cy.get('[data-test="duration"]').last().should('not.be.visible');

    cy.get('button').contains('Continue').should('be.enabled');
  });

  //for onboardign stage 3
  it('onBoarding stage 3:', () => {
    cy.log('we are on onboarding stage 3');
    cy.visit('/onboarding?stage=3');
    cy.url().should('contain', '/onboarding?stage=3');
    cy.contains('Connect your accounts');
    cy.contains('Connect your socials to get started!');
    cy.get('[data-test="coming-soon-text"]')
      .first()
      .should('have.text', '(Coming soon)');
    cy.get('[data-test="coming-soon-text"]')
      .last()
      .should('have.text', '(Coming soon)');
  });

  //for onboardign stage 4
  it('onBoarding stage 4:', () => {
    cy.log('we are on onboarding stage 4');
    cy.visit('/onboarding?stage=4');
    cy.url().should('contain', '/onboarding?stage=4');
    cy.get('button').contains('Proceed').should('be.disabled');
    cy.get('[data-test="select-region-component"]').as('selectRegionComponent');
    cy.get('[data-test="select-region"]').as('selectRegion');
    cy.get('[data-test="select-region-languages"]').as('selectRegionLanguages');
    //first item
    cy.get('@selectRegion').first().should('not.have.class', 'gradient-1');
    cy.get('@selectRegionComponent').first().click();
    cy.get('@selectRegionComponent')
      .first()
      .children()
      .first()
      .then(($reg) => {
        payload.regions.push($reg.text());
      });
    cy.get('@selectRegion').first().should('have.class', 'gradient-1');
    cy.get('@selectRegionLanguages')
      .first()
      .find('p')
      .each(($option) => {
        const optionText = $option.text();
        payload.languages.push(optionText);
      });
    //second item
    cy.get('@selectRegion')
      .first()
      .next()
      .should('not.have.class', 'gradient-1');
    cy.get('@selectRegionComponent').first().next().click();
    cy.get('@selectRegionComponent')
      .first()
      .next()
      .children()
      .first()
      .then(($reg) => {
        payload.regions.push($reg.text());
      });
    // cy.get('@selectRegionLanguages').first().next().should('have.class', 'gradient-1');
    // cy.get('@selectRegionLanguages').first().next().then(($t) => {
    //   console.log($t)
    // })
    cy.get('@selectRegionComponent')
      .first()
      .next()
      .children()
      .last()
      .find('p')
      .each(($option) => {
        const optionText = $option.text();
        payload.languages.push(optionText);
      });
    //third item
    cy.get('@selectRegionComponent')
      .first()
      .next()
      .next()
      .children()
      .last()
      .should('not.have.class', 'gradient-1');
    //fourth item
    cy.get('@selectRegion').last().should('not.have.class', 'gradient-1');
    cy.get('@selectRegionComponent').last().click();
    cy.get('@selectRegionComponent')
      .first()
      .children()
      .last()
      .then(($reg) => {
        payload.regions.push($reg.text());
      });
    cy.get('@selectRegion').last().should('have.class', 'gradient-1');
    cy.get('@selectRegionLanguages')
      .last()
      .find('p')
      .each(($option) => {
        const optionText = $option.text();
        payload.languages.push(optionText);
      });
    //redux update data
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke('getState')
      .its('user')
      .then(($st) => {
        userData = $st;
      });
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke('dispatch', {
        type: 'user/setUser',
        payload: {
          ...userData,
          region: payload.regions,
          languages: payload.languages,
        },
      });

    cy.get('button').contains('Proceed').should('be.enabled');
  });

  //for onboardign stage 5
  it('onBoarding stage 5:', () => {
    cy.log('we are on onboarding stage 5');
    cy.visit('/onboarding?stage=5');
    cy.url().should('contain', '/onboarding?stage=5');
    cy.contains('Received recommended languages');
    cy.contains(
      'We recommend you translate for these languages. Feel free to edit the list as you please!'
    );
    // payload.languages.forEach((option) => {
    //   cy.contains(option).should('exist');
    // });
    cy.get('[data-test="continue"]')
      .should('have.text', 'Continue')
      .and('be.enabled');

    cy.get('[data-test="add-language"]')
      .should('have.text', 'Add another language')
      .click({ force: true, multiple: true });

    cy.get('[data-test="suggest"]')
      .first()
      .click({ force: true, multiple: true });

    cy.get('[data-test="suggest"]').last().should('be.visible');
    cy.contains('Edit suggested languages').should('exist');

    cy.get('[data-test="suggest"]')
      .last()
      .children()
      .first()
      .children()
      .then(($category) => {
        cy.wrap($category).as('selectSuggestLanguages');
        cy.get('@selectSuggestLanguages')
          .first()
          .click({ force: true, multiple: true });
        cy.get('@selectSuggestLanguages')
          .first()
          .next()
          .click({ force: true, multiple: true });
        cy.get('@selectSuggestLanguages')
          .first()
          .next()
          .next()
          .click({ force: true, multiple: true });
        cy.get('@selectSuggestLanguages')
          .first()
          .next()
          .next()
          .next()
          .click({ force: true, multiple: true });
        cy.get('@selectSuggestLanguages')
          .first()
          .next()
          .next()
          .next()
          .next()
          .click({ force: true, multiple: true });
        cy.get('@selectSuggestLanguages')
          .last()
          .click({ force: true, multiple: true });
        cy.get('[data-test="suggest"]')
          .first()
          .click({ force: true, multiple: true });
      });

    cy.get('[data-test="suggest"]').first().find('p').should('not.be.empty');

    cy.get('[data-test="suggest"]').last().should('not.be.visible');
  });
  //onboarding stage 6
  it('onBoarding stage 6:', () => {
    cy.log('we are on onboarding stage 5');
    cy.visit('/onboarding?stage=6');
    cy.url().should('contain', '/onboarding?stage=6');
    cy.contains('Success!');
    cy.contains(
      `You've completed the onboarding process. Now let's take a look at your dashboard.`
    );
    cy.get('button').contains('Proceed to dashboard').should('be.enabled');
  });
});
