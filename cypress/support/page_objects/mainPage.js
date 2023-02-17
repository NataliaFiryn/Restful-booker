export class mainPage{

contactNameField = '[data-testid="ContactName"]'
contactEmailField = '[data-testid="ContactEmail"]'
contactPhoneField = '[data-testid="ContactPhone"]'
contactSubjectField = '[data-testid="ContactSubject"]'
contactDescriptionField = '[data-testid="ContactDescription"]'


    fillUpContactUsForm(contactName, contactEmail, contactPhone, contactSubject, ContactDescription){
        cy.get('.container-fluid').find('[class="row contact"]').then(contactUs=> {
            cy.get(onMainPage.contactNameField).type(contactName)
            cy.get(onMainPage.contactEmailField).type(contactEmail)
            cy.get(onMainPage.contactPhoneField).type(contactPhone)
            cy.get(onMainPage.contactSubjectField).type(contactSubject)
            cy.get(onMainPage.contactDescriptionField).type(ContactDescription)
            cy.wrap(contactUs).find('button[type="button"]').click()
          })
    }
    contactUsFormSubmitedCorrct(){
        
    }
}

export const onMainPage = new mainPage()