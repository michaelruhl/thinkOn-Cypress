import contacts from '../fixtures/contacts'
import { addContact, isVisible, editContact, deleteContact } from '../fixtures/helpers'

describe('Contact List App', () => {
  beforeEach(() => {
    cy.visit('../contact_app.html')
  })

  it('Displays the contact list table', () => {
    cy.get('h1').should('contain', 'Contact List App')
    cy.get('table').should('be.visible')
  })

  it('Allows adding new contacts', () => {

    addContact(contacts[0])
    isVisible(contacts[0])

    addContact(contacts[1])
    isVisible(contacts[1])
  })

  it('Allows editing a contact', () => {

    addContact(contacts[0])
    isVisible(contacts[0])

    const newPhone = '9876543210'
    const newEmail = 'janesmith@example.com'

    editContact(newPhone, newEmail)
    

    cy.get('table').contains('td', newPhone).should('be.visible')
    cy.get('table').contains('td', newEmail).should('be.visible')
  })

  it('Allows deleting a contact', () => {

    addContact(contacts[0])
    isVisible(contacts[0])
    deleteContact(contacts[0].name)
    

    cy.get('table').should('not.contain', 'td')
  })
})