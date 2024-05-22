describe('About Page Tests', () => {
  beforeEach(() => {
    cy.visit('/about');
    cy.viewport(1250, 1050);
    cy.wait(2000);
  });

  it('header test', () => {
    cy.contains('Services').should('exist').and('be.visible');
    cy.contains('Blog').should('exist').and('be.visible');
    cy.contains('Pricing').should('exist').and('be.visible');
    cy.contains('Languages').should('exist').and('be.visible');
    cy.contains('About').should('exist').and('be.visible');
    cy.get(`img[alt="AVIEW International logo"]`)
      .should('exist')
      .and('be.visible');
    cy.get('header').within(() => {
      cy.get('[data-test="header-hidden-text"]').should('not.be.visible');

      cy.get('[data-test="header-span"]').first().trigger('mouseover');
      cy.get('[data-test="header-hidden-text"]').first().should('be.visible');
      cy.get('[data-test="header-hidden-text"]')
        .last()
        .should('not.be.visible');

      cy.get('[data-test="header-span"]').last().trigger('mouseover');
      cy.get('[data-test="header-hidden-text"]').last().should('be.visible');
      cy.checkAncher('contact-us', '/#generate-aview');
      cy.checkAncher('login', '/login');

      cy.contains('About').should('have.css', 'color', 'rgba(0, 0, 0, 0)')
    });
  });

  it('Landing about page test', () => {
    cy.checkImage('landing-graphic', 'mission', 'about-main-text');
    cy.checkAncher('contact-us', '/#generate-aview');
    cy.checkImage('about-graphic', 'about-aview', 'about-aview-body');
  });

  it('At aview', () => {
    cy.scrollView('at-aview');
    cy.get('#at-aview').within(() => {
      cy.get('[data-test="at-aview-heading"]').should(
        'have.text',
        'At Aview we'
      );
      cy.get('[data-test="at-aview-body"]').should(
        'have.text',
        `Ensure your content is translated accurately, guaranteeing a positive return.`
      );
    });
  });

  it('Core values', () => {
    cy.scrollView('core-values');
    cy.get('#core-values').within(() => {
      cy.get('[data-test="core-values-heading"]').should(
        'have.text',
        'Our Core Values'
      );
      cy.get('[data-test="core-values-body"]').should(
        'have.text',
        `Aview focuses on three main items when it comes to our service. We know every creator is different and tailor our approach.`
      );

      cy.checkImage('Fast Turn-Around', 'value-1', 'value-1-desc');
      cy.checkImage('Tailored for Creators', 'value-2', 'value-2-desc');
      cy.checkImage('Flexible Payments', 'value-3', 'value-3-desc');

      cy.get(`[data-test="value-1"]`)
        .trigger('mouseover')
        .should('have.css', 'color', 'rgba(0, 0, 0, 0)');

      cy.get(`[data-test="value-2"]`)
        .trigger('mouseover')
        .should('have.css', 'color', 'rgba(0, 0, 0, 0)');

      cy.get(`[data-test="value-3"]`)
        .trigger('mouseover')
        .should('have.css', 'color', 'rgba(0, 0, 0, 0)');
    });
  });

  it('Core values', () => {
    cy.scrollView('aview-growth');
    cy.get('#aview-growth').within(() => {
      cy.checkImage(
        'Our First Client - Logan Paul',
        'growth-1',
        'growth-1-desc'
      );
      cy.checkImage('Hitting Our Key Metrics', 'growth-2', 'growth-2-desc');
      cy.checkImage('Expanding Our Services', 'growth-3', 'growth-3-desc');
    });
  });

  it('Impact Numbers', () => {
    cy.scrollView('milestones');
    cy.get('#milestones').within(() => {
      cy.wait(6000);
      cy.checkImage('', '500', 'International Creator Views');
      cy.checkImage('', '15', 'Languages');
      cy.checkImage('', '10', 'International Gained Subscribers');
      cy.checkImage('', '1600', 'Completed Videos');
      cy.checkImage('', '400', 'Hours of Translated Content');
      cy.checkImage('', '100', 'Client Subscriber Count');
    });
  });

  it('Meet the Team', () => {
    cy.scrollView('meet-the-team');
    cy.get('#meet-the-team').within(() => {
      cy.wait(1000);
      cy.get('h3').first().should('have.text', 'Co-Founders');
      cy.checkImage('Akshay Maharaj', 'Akshay Maharaj', 'Co-Founder');
      cy.checkImage('Garnet Delsey', 'Garnet Delsey', 'Co-Founder');
      cy.get('h3').eq(1).should('have.text', 'Development Team');
      cy.checkImage('Victor Ogunjobi', 'Victor Ogunjobi', 'Software Engineer');
      cy.checkImage('Chandhu Mamidi', 'Chandhu Mamidi', 'Software Engineer');
      cy.get('h3').eq(2).should('have.text', 'Design Team');
      cy.checkImage('David Lovenburg', 'David Lovenburg', 'Software Engineer');
      cy.checkImage('Luis Sarceño', 'Luis Sarceño', 'Graphic Designer');
    });
  });

  it('Join the Team', () => {
    const inputValues = {
      input1: 'Chandhu mamidi',
      input2: 'chandhudev0@gmail.com',
      input3: 'https://www.linkedin.com/in/chandhudev/',
    };
    cy.scrollView('join-the-team');
    cy.get('#join-the-team').within(() => {
      cy.get('#name')
        .type(inputValues.input1)
        .should('have.value', inputValues.input1);
      cy.get('select[name="country"]').should('have.value', 'Select Country');

      cy.get('select[name="country"]')
        .select('India')
        .should('have.value', 'India');
      cy.get('#email')
        .type(inputValues.input1)
        .should('have.value', inputValues.input1);
      cy.get('#linkedin')
        .type(inputValues.input1)
        .should('have.value', inputValues.input1);

      cy.get('[data-test="position"]').first().click();
      cy.get('[data-test="position"]').last().should('be.visible');
      cy.get('[data-test="position"]')
        .last()
        .children()
        .first()
        .find('p')
        .then(($language) => {
          cy.wrap($language).first().click({ force: true, multiple: true });
        });
      cy.get('[data-test="position"]').first().find('p').should('not.be.empty');
      cy.get('[data-test="position"]').last().should('not.be.visible');

      cy.fixture('chandhu.pdf', null).as('fileUpload');
      cy.get('input[type=file]').selectFile('@fileUpload', { force: true });

      cy.get('[data-test="send-message"]').should('exist').and('be.visible');
    });
  });

  it('Scroll to top test', () => {
    cy.get('#scrollButton').should('not.exist');
    cy.scrollView('core-values');
    cy.get('#scrollButton').should('exist').and('be.visible');
    cy.get('#scrollButton').click();
    cy.checkAncher('contact-us', '/#generate-aview');
    cy.checkImage('about-graphic', 'about-aview', 'about-aview-body');
    cy.get('#scrollButton').should('not.exist');
  });

  it('FAQ test', () => {
    cy.scrollView('faq');
    cy.get('#faq').within(() => {
      cy.checkFaq(
        '1',
        'Three simple steps to increase your international viewership.'
      );
      cy.checkFaq('2', 'AVIEW offers 3 services.');
      cy.checkFaq(
        '3',
        'We have been generating AVIEW for Logan Paul, Mark Rober, YesTheory, Ninja, Vitalyzdtv, Active Self Protection, Saud Brothers, Amanda Cerny, Marlin and many more! AVIEW has helped these creators expand into international markets and become known worldwide.'
      );
      cy.checkFaq('4', 'AVIEW creates a pricing plan for each creator');
      cy.checkFaq(
        '5',
        'To see the greatest results, we recommend you have an average of 25,000 views per video.'
      );
      cy.checkFaq(
        '6',
        'Yes! We are a multimedia translation service. We can translate and edit the content on any platform for you so they are ready to be uploaded.'
      );
      cy.contains('Click here to get started!').should('not.be.visible');
      cy.get(`#question7`).click({ force: true, mutliple: true });
      cy.contains('Click here to get started!')
        .should('exist')
        .should('be.visible');
      cy.get(`#question7`).click({ force: true, mutliple: true });
      cy.contains('Click here to get started!').should('not.be.visible');
    });
  });

  it('Footer test', () => {
    cy.scrollView('footer');
    cy.get('#footer').within(() => {
      cy.checkAncher('Scientific Documents', '/corporate/scientific');
      cy.checkAncher('Financial Documents', '/corporate/financial');
      cy.checkAncher('Business Documents', '/corporate/business');
      cy.checkAncher('Legal Documents', '/corporate/legal');
      cy.checkAncher('Marketing Documents', '/corporate/marketing');
      cy.checkAncher('eLearning Documents', '/corporate/e-learning');
      cy.checkAncher('Medical Documents', '/corporate/medical');
      cy.checkAncher('Voice Overs', '/corporate/voice-over');
      cy.checkAncher('Pricing', '/pricing');
      cy.checkAncher('Blog', '/blog');
      cy.checkAncher('About', '/about');
      cy.checkAncher('Careers', '/careers');
      cy.checkAncher('Contact', '/contact');
      cy.checkAncher('Join Waitlist', '/waitlist');
      cy.get(`img[alt="AVIEW International logo"]`)
        .should('exist')
        .and('be.visible');
    });
    cy.contains('Privacy Policy').should('exist').and('be.visible');
    cy.goWaitlist();
    cy.checkAncher('social-1', 'https://twitter.com/Aviewint');
    cy.checkAncher(
      'social-2',
      'https://youtube.com/channel/UCjBLxbcY1w0qn8UGiMR2n6w'
    );
    cy.checkAncher('social-3', 'https://www.instagram.com/aviewint/');
    cy.checkAncher('social-4', 'https://www.facebook.com/aviewinternational');
    cy.checkAncher('social-5', 'https://vm.tiktok.com/ZMNQRxbLd/');
    cy.checkAncher(
      'social-6',
      'https://www.linkedin.com/company/aview-international'
    );
  });
});
