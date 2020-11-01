const { Given } = require('cypress-cucumber-preprocessor/steps')


Given('I open LegalBox login page', ()=>{
    cy.visit('https://legalbox.ng/login')
});
When('I type invalid', (datatable)=>{
    datatable.hashes().forEach(element => {
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/input[1]')
        .clear()
        .type(element.email)
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[1]/div[1]/input[1]')
        .clear()
        .type(element.password)
    });
});
When('I click on Log in button', ()=>{
    cy.get('.headline.text-uppercase')
    .should('be.visible')
    .click()
});
Then('{string} should definitely be shown', (content)=>{
    cy.contains(content)
    .should('be.visible')
    .contains('password is incorrect')
});

//.........................................................................................//

Given('I open LegalBox login page', ()=>{
    cy.visit('https://legalbox.ng/login')
});
When('I type in valid', (datatable)=>{
    datatable.hashes().forEach(element => {
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/input[1]')
        .clear()
        .type(element.email)
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[1]/div[1]/input[1]')
        .clear()
        .type(element.password)
    });
});
When('I click on Log in button', ()=>{
    cy.get('.headline.text-uppercase')
    .should('be.visible')
    .click()
});
Then('{string} should be shown', (content2)=>{
   cy.contains(content2)
   .should('be.visible')
   .contains('Welcome! You are successfully logged in')
});
Then('New URL should be shown', ()=>{
    cy.url().should('include', '/subscription', {delay:50})
 });