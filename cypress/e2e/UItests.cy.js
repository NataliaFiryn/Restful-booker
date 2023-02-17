const { onMainPage } = require("../support/page_objects/mainPage")

describe('Contact Us', () => {
beforeEach('Open website', () => {
    cy.visit('/')
})
    it('Happy Path', () => {
        onMainPage.fillUpContactUsForm('Hercules', 'example@email.com', '12345678901','Subject','Text Message Text Message')
    cy.get('[class="row contact"]').find('[class="col-sm-5"]').eq(0)
    .should('contain','Thanks for getting in touch ')
    //.and('contain', 'Hercules')
    .and('contain', "We'll get back to you about")
    //.and('contain', 'Subject')
    .and('contain', 'as soon as possible.')
    })
})