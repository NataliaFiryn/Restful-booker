describe('API Tests', () => {
  it('Display website', () => {
    cy.intercept('GET', 'https://automationintesting.online/branding/').as('getBranding')
    cy.visit('https://automationintesting.online')
    cy.wait('@getBranding').then(getBranding => {
      expect(getBranding.response.statusCode).to.equal(200)
    })
  })
  it('Get all Rooms', () => {
    cy.intercept('GET', 'https://automationintesting.online/room/').as('getRooms')
    cy.visit('https://automationintesting.online')
    cy.wait('@getRooms').then(getRooms => {
      expect(getRooms.response.statusCode).to.equal(200)
    })
  })
  it('Get room 1', () => {
    cy.visit('https://automationintesting.online')
    cy.intercept('GET', 'https://automationintesting.online/report/room/1').as('getRoom1')
    cy.get('.container-fluid').find('[class="row hotel-room-info"]').find('button[class="btn btn-outline-primary float-right openBooking"]').click()
    cy.wait('@getRoom1').then(getRoom1 => {
      console.log(getRoom1)
      expect(getRoom1.response.statusCode).to.equal(200)
  })
})
it.only('Book a room', () => {
  cy.visit('https://automationintesting.online')
  cy.get('.container-fluid').find('[class="row hotel-room-info"]').find('button[class="btn btn-outline-primary float-right openBooking"]').click()
  // cy.intercept('POST', 'https://automationintesting.online/booking/').as('postBookRoom')
  
  cy.get('[class="rbc-calendar"]').find('button[role="cell"]').contains('12').as('day1')
cy.get('[class="rbc-calendar"]').find('button[role="cell"]').contains('18').as('day2')

   cy.get('@day1')
   .trigger('mouseover')
   .trigger('mousedown')
 // cy.get('@day2')
 .wait(100)
 .trigger('mousemove', 0, 10,{force: true})
 .wait(100)
   .trigger('mousemove', 50, 10,{force: true})
 .wait(100)
   .trigger('mousemove', 100, 10,{force: true})
    .trigger('mouseup',100, 10,{force: true})
   

//   cy.wait('@postBookRoom').then(bookRoom => {
//     console.log(bookRoom)
//     expect(bookRoom.response.statusCode).to.equal(200)
// })
})
  it('Contact Us', () => {
    cy.visit('https://automationintesting.online')

    cy.intercept('POST', 'https://automationintesting.online/message/').as('postMessage')
    cy.get('.container-fluid').find('[class="row contact"]').then(contactUs=> {
      cy.get('[data-testid="ContactName"]').type('Aiden')
      cy.get('[data-testid="ContactEmail"]').type('example@email.com')
      cy.get('[data-testid="ContactPhone"]').type('12345678901')
      cy.get('[data-testid="ContactSubject"]').type('contact Subject')
      cy.get('[data-testid="ContactDescription"]').type('test message test message')
      cy.wrap(contactUs).find('button[type="button"]').click()
    })
      cy.wait('@postMessage').then(postMessage => {
        expect(postMessage.response.statusCode).to.equal(201)
        expect(postMessage.response.body.subject).to.equal('contact Subject')
        expect(postMessage.response.body.description).to.equal('test message test message')
      })
  })

})