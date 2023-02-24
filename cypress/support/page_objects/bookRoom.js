export class BookRoom {

    bookThisRoombutton = 'button[class="btn btn-outline-primary float-right openBooking"]'

    dispalyBookRoomContainer() {
        cy.get(bookRoom.bookThisRoombutton).click()
    }
    calendar() {
        let date = new Date()
        let dayOfWeek = 6 //date.getDay()
        cy.log(dayOfWeek)
        let day = date.getDate()
        cy.log(day)

        cy.get('[class="rbc-calendar"]').find('button[role="cell"]').contains('25').as('day1').then(abc => {
            if (dayOfWeek === 6) {
                cy.get('@day1')
                    .trigger('mouseover')
                    .trigger('mousedown')
                    .wait(100)
                    .trigger('mousemove', 10, 20, { force: true })
                    .wait(100)
                    .trigger('mousemove', 10, 70, { force: true })
                    .wait(100)
                    .trigger('mouseup', 10, 90, { force: true })
            } else {
                cy.get('@day1')
                    .trigger('mouseover')
                    .trigger('mousedown')
                    .wait(100)
                    .trigger('mousemove', 0, 10, { force: true })
                    .wait(100)
                    .trigger('mousemove', 50, 10, { force: true })
                    .wait(100)
                    .trigger('mouseup', 80, 10, { force: true })
            }
        })
    }
}

export const bookRoom = new BookRoom()