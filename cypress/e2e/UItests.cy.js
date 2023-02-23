const { onMainPage } = require("../support/page_objects/mainPage")

describe('Contact Us', () => {
beforeEach('Open website', () => {
    cy.visit('/')
})
    it('Happy Path', () => {
    onMainPage.fillUpContactUsForm('Hercules', 'example@email.com', '12345678901','Subject','Text Message Text Message')
    onMainPage.contactUsFormSubmitedCorrct()
    })
    it('Name field was not filled up', () => {
    onMainPage.fillUpContactUsForm(null, 'example@email.com', '12345678901','Subject','Text Message Text Message')
    onMainPage.validationMessegeEmptyField('Name')
    })
    it('Email field was not filled up', () => {
        onMainPage.fillUpContactUsForm('Herules', null, '12345678901','Subject','Text Message Text Message')
        onMainPage.validationMessegeEmptyField('Email')
    })
    it('Phone field was not filled up', () => {
        onMainPage.fillUpContactUsForm('Hercules', 'example@email.com', null,'Subject','Text Message Text Message')
        onMainPage.validationMessegeEmptyField('Phone')
    })
    it('Phone field was too short', () => {
        onMainPage.fillUpContactUsForm('Hercules', 'example@email.com', '1234567890','Subject','Text Message Text Message')
        onMainPage.validationMessege('Phone')
    })
    it('Phone field was too long', () => {
        onMainPage.fillUpContactUsForm('Hercules', 'example@email.com', '1234567890123456789012','Subject','Text Message Text Message')
        onMainPage.validationMessege('Phone')
    })
    it('Subject field was not filled up', () => {
        onMainPage.fillUpContactUsForm('Hercules', 'example@email.com', '12345678901', null,'Text Message Text Message')
        onMainPage.validationMessegeEmptyField('Subject')
    })
    it('Subject field was too short', () => {
        onMainPage.fillUpContactUsForm('Hercules', 'example@email.com', '12345678901', 'Subj','Text Message Text Message')
        onMainPage.validationMessege('Subject')
    })
    it('Subject field was too long', () => {
        onMainPage.fillUpContactUsForm('Hercules', 'example@email.com', '12345678901', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis elit justo. Etiam est tellus, sit','Text Message Text Message')
        onMainPage.validationMessege('Subject')
    })
    it('Message field was not filled up', () => {
        onMainPage.fillUpContactUsForm('Hercules', 'example@email.com', '12345678901', 'Subject',null)
        onMainPage.validationMessegeEmptyField('Message')
    })
    it('Message field was too short', () => {
        onMainPage.fillUpContactUsForm('Hercules', 'example@email.com', '12345678901', 'Subject','Lorem ipsum dolores')
        onMainPage.validationMessege('Message')
    })
    it('Message field was too long', () => {
        onMainPage.fillUpContactUsForm('Hercules', 'example@email.com', '12345678901', 'Subject','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis elit justo. Etiam est tellus, cursus ut lacus sed, aliquet vulputate ipsum. Sed vestibulum facilisis nibh quis faucibus. Aliquam euismod dui nec arcu faucibus, id ornare sapien eleifend. Integer vestibulum, purus a elementum aliquet, mi mauris elementum ex, ut vehicula odio lacus eget lorem. Aenean suscipit est fringilla, condimentum nisl in, eleifend enim. Mauris faucibus vitae dui eget varius. Fusce suscipit orci a augue tincidunt mollis. Donec elementum, libero sed ullamcorper placerat, nisl erat accumsan lacus, ut faucibus neque enim in erat. In at odio in diam interdum pulvinar blandit ac metus. Pellentesque mattis vulputate metus aliquet dapibus. In laoreet lorem eu urna vulputate, vel rutrum purus sodales. Integer eget nunc ligula. Aliquam condimentum eros nec nibh congue pulvinar. Nam faucibus quam in lorem laoreet malesuada. Aliquam vel purus ultricies, pulvinar turpis sed, bibendum massa. Morbi sodales laoreet lorem, eu hendrerit nisi. Proin pretium sapien id metus tempor, at aliquet ex maximus. Aenean maximus scelerisque est, et vehicula dui pretium quis. Donec egestas non nulla posuere commodo. Praesent ut condimentum ipsum. Maecenas aliquam tempor sapien, nec gravida ex elementum eu. Etiam mattis sagittis pellentesque. Nullam semper malesuada ex nec tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet tincidunt lacus. Phasellus luctus libero id pretium porttitor. Curabitur feugiat libero sit amet lorem molestie rutrum. Phasellus malesuada gravida odio. Cras ultrices laoreet est. Aenean ornare faucibus arcu vel fringilla. Mauris ac pharetra massa, vitae porttitor libero. Etiam lacinia, nibh id tempus egestas, orci massa laoreet quam, nec posuere nulla quam ut ipsum. Morbi commodo sit amet sem eu facilisis. Nam a suscipit libero. Integer sagittis sagittis risus vitae gravida. Proin lobortis mattis nisi tincidunt rutrem.')
        onMainPage.validationMessege('Message')
    })
    
})