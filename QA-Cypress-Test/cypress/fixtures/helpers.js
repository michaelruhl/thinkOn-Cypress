const addContact = (contact) => {
    cy.get('input[placeholder="Name"]').type(contact.name);
    cy.get('input[placeholder="Phone"]').type(contact.phone);
    cy.get('input[placeholder="Email"]').type(contact.email);
    cy.get('button[name="add"]').click();
  }


const isVisible = (contact) => {
    cy.get('table').contains('td', contact.name).should('be.visible');
    cy.get('table').contains('td', contact.phone).should('be.visible');
    cy.get('table').contains('td', contact.email).should('be.visible');
}

const editContact = (newPhone, newEmail) => {
    cy.get('tr').eq(1).within(() => {
        cy.get('button[name="edit"]').click()
        cy.get('input[type="text"]').eq(1).clear().type(newPhone)
        cy.get('input[type="text"]').eq(2).clear().type(newEmail)
        cy.get('button[name="update"]').click()
    });

}
  
const deleteContact = (contact) => {
    cy.get('table').contains('td', contact).parent().within(() => {
        cy.get('button[name="delete"]').click();
      });
  }

export default { addContact, deleteContact, isVisible, editContact };