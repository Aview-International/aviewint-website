// import { auth } from '../../pages/api/firebase';

describe('Testing the dashboard', () => {
  let userData = {};

  beforeEach(() => {
    // cy.stub(auth, 'onAuthStateChanged').callsFlake((callback) => {
    //   callback({ uid: 'userId' });
    //   console.log(
    //     'we are on the beforeEach hook to call before dashbaord request'
    //   );

    //   return () => {};
    // });
    cy.setCookie('token', 'token here');
    cy.setCookie('uid', 'userId here');
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
    cy.get('[data-test="sidebar-text"]').then((items) => {
      const textsArray = Array.from(items, ($item) => $item.text()); // Extract the texts into an array
      const expectedTexts = [
        'Home',
        'Upload',
        'Assistance',
        'AI Voice',
        'History',
        'Settings',
        'Sign Out',
      ]; // Define the expected texts
      expectedTexts.forEach((text) => {
        expect(textsArray).to.include(text); // Assert that each expected text is present in the array
      });
    });
    cy.get('[data-test="dashboard-open-icon"]').click();
    cy.get('[data-test="profile-picture"]').should('not.be.visible');
  });

  it('dashboard header tests', () => {
    cy.clock(new Date('2023-05-02T08:00:00').getTime());
    cy.get('[data-test="sidebar-text"]').contains('Good Morning');
    cy.clock(new Date('2023-05-02T14:00:00').getTime());
    cy.get('[data-test="sidebar-text"]').contains('Good Afternoon');
    cy.clock(new Date('2023-05-02T19:00:00').getTime());
    cy.get('[data-test="sidebar-text"]').contains('Good Evening');
    cy.clock(new Date('2023-05-02T23:00:00').getTime());
    cy.get('[data-test="sidebar-text"]').contains("Can't Sleep?");
    //cy.get('[data-test="role"]').should('be.equal', userData.userName);
    cy.contains('Welcome to your Aview Dashboard');
    cy.contains('Messages');
  });

  it.only('dashboard upload page', () => {
    let upload_data = {
      languages: '',
      video: null,
      videoUrl: '',
      saveSettings: false,
      additionalNote: '',
    };
      cy.visit('/dashboard/upload');
      cy.get('video').should('not.exist')
      cy.get('[data-test="select-files-button"]').trigger('click');
      cy.fixture('videofile.mp4', 'binary')
        .then(Cypress.Blob.binaryStringToBlob)
        .then((blob) => {
          
          const fileName = 'videofile.mp4'; 
          const fileOptions = { type: 'video/mp4' };
          const file = new File([blob], fileName, fileOptions);
         
           upload_data = {
            ...upload_data,
            video: file
           }
         
          cy.get('input[type="file"]').selectFile({
            contents: blob,
            fileName: '',
            lastModified: Date.now(),
            type: 'video/mp4',
          }, { force: true});
        });
      cy.get('video').should('be.visible')
      cy.get('video').then(($video) => {
        const videoUrl = URL.createObjectURL(upload_data.video);
        upload_data = {
          ...upload_data,
          videoUrl : videoUrl
        }
       

        $video.attr('src', videoUrl);
        $video.get(0).play();
      })
      cy.get('video').should('have.attr', 'src').and('include', upload_data.videoUrl);
      
      //Distribution side on dashboard page
      cy.contains('Distribution');
      cy.contains(
        'Which channels do you want these videos posted on? Want to post in an additional language? You can create more international channels.'
      );
      
      let languagesArray = []
      cy.get('[data-test="translateOptions"]').children().each(($element) => {
         $element.find('input[type="checkbox"]').check({ force:true}).then((a) => {
          
         })
      })

      cy.get('textarea').should('be.empty')
      cy.get('textarea').type('Save All these Values')
      
      cy.get('textarea').then(($textarea) => {
        const placeholderValue = $textarea.attr('placeholder');
         upload_data = {
          ...upload_data,
          additionalNote: placeholderValue
         }
         expect(placeholderValue).to.exist; 
         expect(placeholderValue).to.not.be.empty;
      })

      cy.get('input[type="checkbox"]').check({ force: true})
      cy.get('input[type="checkbox"]').should("be.checked")
      cy.window().its('Cypress').its('store').invoke('dispatch', {
        type: 'user/setUser',
        payload: { ...userData, saveSettings: true},
      });

      cy.get('#opener').click()

      cy.uploadCreatorVideo(video, 'kUhbjVftZJNdhpfWhwnaCDan7gZ2', 'token here' )
   
  });
});
