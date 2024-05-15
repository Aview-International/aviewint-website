describe('landing page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport(1250, 1050);
    cy.wait(3000);
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
    });
  });

  it('landing test', () => {
    cy.checkImage('', 'unlock', 'monetize');
    cy.get('[data-test="unlock-growth"]').within(() => {
      cy.goWaitlist();
      cy.get('video')
        .should('be.visible')
        .then(($video) => {
          $video[0].play();
          cy.wait(5000);
          expect($video[0].paused).to.be.false;
          $video[0].pause();
        });
    });
  });

  it('content creator test', () => {
    cy.scrollView('content-creators');
    cy.get('#content-creators').within(() => {
      cy.checkImage(
        'about-Global Content Control Made Easy',
        'Global Content Control Made Easy',
        'Seamlessly integrate, manage, and distribute your content on a global scale with Aview'
      );
      cy.checkImage(
        'about-Speak Every Language, Reach Every Audience',
        'Speak Every Language, Reach Every Audience',
        'Unlock international markets with precise translations and voice over dubbing tailored for your content'
      );
      cy.checkImage(
        'about-Brand Collaborations That Resonate',
        'Brand Collaborations That Resonate',
        `Discover and partner with global brands that align perfectly with your content's essence`
      );
      cy.checkImage(
        'about-Discover Your Global Fanbase',
        'Discover Your Global Fanbase',
        'Optimize and tailor your content to resonate with diverse audiences, expanding your reach and influence'
      );
      cy.checkImage(
        'about-Monetization Beyond Borders',
        'Monetization Beyond Borders',
        'Transform your content into a global revenue stream, tapping into untapped markets and audiences'
      );
    });
  });

  it('scroll-anime-vertical test', () => {
    cy.scrollView('scroll-vertical-anime');
    cy.get('#scroll-vertical-anime').within(() => {
      cy.get('h2').should(
        'have.text',
        `Chosen by the World's Leading Creators and Innovative Enterprises`
      );
      cy.get('[data-test="animate"]').should(
        'have.css',
        'animation-name',
        'slide-testimonial'
      );
      cy.get('[data-test="animate"]').should(($el) => {
        const animation = $el.css('animation');
        expect(animation).to.contain('slide-testimonial');
        expect(animation).to.contain('infinite');
      });
      cy.get('[data-test="animate-reverse"]').should(
        'have.css',
        'animation-name',
        'slide-testimonial-reverse'
      );
      cy.get('[data-test="animate-reverse"]').should(($el) => {
        const animation = $el.css('animation');
        expect(animation).to.contain('slide-testimonial-reverse');
        expect(animation).to.contain('infinite');
      });
    });
  });

  it('Empower global test', () => {
    cy.scrollView('empower-global');
    cy.get('#empower-global').within(() => {
      cy.checkImage('', 'content-management', 'integrate-socials');
      cy.checkImage(
        'Tools for Global Dominance',
        'Tools for Global Dominance',
        'Harness a suite of powerful tools designed to propel your content onto the international stage.'
      );
      cy.checkImage(
        'Insights for International Impact',
        'Insights for International Impact',
        'Dive deep into analytics, understand your global reach, and monetize effectively in every language.'
      );
    });
  });

  it('Impact Numbers', () => {
    cy.scrollView('metrics-anime');
    cy.get('#metrics-anime').within(() => {
      cy.wait(5000);
      cy.checkImage('', '100', 'Total Creator Reach');
      cy.checkImage('', '10', 'International Subscribers');
      cy.checkImage('', '25', 'Monetized Regions');
      cy.checkImage('', '5', 'Turnaround Time');
      cy.checkImage('', '10', 'Other Applications');
      cy.checkImage('', '500', 'International Views');
      cy.get('[data-test="language-container"]')
        .first()
        .within(() => {
          cy.languageContainer('English', 'English');
          cy.languageContainer('French', 'French');
          cy.languageContainer('Hindi', 'Hindi');
          cy.languageContainer('Spanish', 'Spanish');
          cy.languageContainer('Filipino', 'Filipino');
          cy.languageContainer('German', 'German');
          cy.languageContainer('Portguese', 'Portguese');
          cy.languageContainer('Korean', 'Korean');
          cy.languageContainer('Russian', 'Russian');
          cy.languageContainer('Japanese', 'Japanese');
        });
      cy.get('[data-test="language-container"]')
        .last()
        .within(() => {
          cy.checkHeadings('Scientific');
          cy.checkHeadings('Financial');
          cy.checkHeadings('Legal');
          cy.checkHeadings('Business');
          cy.checkHeadings('Marketing');
          cy.checkHeadings('Voice Overs');
          cy.checkHeadings('Video Games');
          cy.checkHeadings('Brochures');
          cy.checkHeadings('E-Learning');
        });
    });
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

  it('Revenue potential test', () => {
    cy.scrollView('international-growth');
    cy.get('#international-growth').within(() => {
      cy.checkRange(10, 750, 3);
      cy.checkRange(3, 200, 5);
      cy.checkRange(5, 3.5, 0);
    });
  });

  // it('Start Generating test', () => {
  //   cy.scrollView('generate-aview');
  //   cy.get('#generate-aview').within(() => {
  //     cy.get('[data-test="iframe"]').should('exist').and('be.visible');
  //   });
  // });

  it('Go Global test', () => {
    cy.scrollView('go-global');
    cy.get('#go-global').within(() => {
      cy.checkImage('go_global', 'global-potential', `international`);
      cy.goWaitlist();
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

  it('Scroll to top test', () => {
    cy.get('#scrollButton').should('not.exist');
    cy.scrollView('content-creators');
    cy.get('#scrollButton').should('exist').and('be.visible');
    cy.get('#scrollButton').click();
    cy.checkImage('', 'unlock', 'monetize');
    cy.get('#scrollButton').should('not.exist');
  });
});
