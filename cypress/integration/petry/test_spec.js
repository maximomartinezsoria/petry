/* global describe, it, cy */

describe('Petry', function () {
  it('app should work', function () {
    cy.visit('/')
  })

  it('should navigate and see pictures', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('should go to home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('should show forms on favs and user when user is not registered', function () {
    cy.visit('/user')
    cy.get('form').should('have.length', 2)

    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
