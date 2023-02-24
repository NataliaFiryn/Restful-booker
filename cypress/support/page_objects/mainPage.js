export class mainPage {

    contactNameField = '[data-testid="ContactName"]'
    contactEmailField = '[data-testid="ContactEmail"]'
    contactPhoneField = '[data-testid="ContactPhone"]'
    contactSubjectField = '[data-testid="ContactSubject"]'
    contactDescriptionField = '[data-testid="ContactDescription"]'
    alertContainer = '[class="alert alert-danger"]'

    fillUpContactUsForm(contactName, contactEmail, contactPhone, contactSubject, contactDescription) {
        cy.get('.container-fluid').find('[class="row contact"]').then(contactUs => {
            if (contactName !== null) cy.get(onMainPage.contactNameField).clear().type(contactName)
            if (contactEmail !== null) cy.get(onMainPage.contactEmailField).clear().type(contactEmail)
            if (contactPhone !== null) cy.get(onMainPage.contactPhoneField).clear().type(contactPhone)
            if (contactSubject !== null) cy.get(onMainPage.contactSubjectField).clear().type(contactSubject)
            if (contactDescription !== null) cy.get(onMainPage.contactDescriptionField).clear().type(contactDescription)
            const Name = contactName
            cy.wrap(Name).as('Name')
            const Subject = contactSubject
            cy.wrap(Subject).as('Subject')
            cy.wrap(contactUs).find('button[type="button"]').click()
        })
    }
    contactUsFormSubmitedCorrct() {
        cy.get('@Name').then((Name) => {
            cy.get('@Subject').then((Subject) => {
                cy.get('[class="row contact"]').find('[class="col-sm-5"]').eq(0)
                    .should('contain', 'Thanks for getting in touch ')
                    .and('contain', Name)
                    .and('contain', "We'll get back to you about")
                    .and('contain', Subject)
                    .and('contain', 'as soon as possible.')
            })
        })
    }
    validationMessegeEmptyField(field) {
        if (field === 'Name') {
            cy.get(onMainPage.alertContainer).should('contain', 'Name may not be blank')
        } else if (field === 'Email') {
            cy.get(onMainPage.alertContainer).should('contain', 'Email may not be blank')
        } else if (field === 'Phone') {
            cy.get(onMainPage.alertContainer).should('contain', 'Phone may not be blank')
                .and('contain', 'Phone must be between 11 and 21 characters.')
        } else if (field === 'Subject') {
            cy.get(onMainPage.alertContainer).should('contain', 'Subject may not be blank')
                .and('contain', 'Subject must be between 5 and 100 characters.')
        } else if (field === 'Message') {
            cy.get(onMainPage.alertContainer).should('contain', 'Message may not be blank')
                .and('contain', 'Message must be between 20 and 2000 characters.')
        }
    }
    validationMessege(field) {
        if (field === 'Email') {
            cy.get(onMainPage.alertContainer).should('contain', 'must be a well-formed email address')
        } else if (field === 'Phone') {
            cy.get(onMainPage.alertContainer).should('contain', 'Phone must be between 11 and 21 characters.')
        } else if (field === 'Subject') {
            cy.get(onMainPage.alertContainer).should('contain', 'Subject must be between 5 and 100 characters.')
        } else if (field === 'Message') {
            cy.get(onMainPage.alertContainer).should('contain', 'Message must be between 20 and 2000 characters.')
        }
    }
}

export const onMainPage = new mainPage()