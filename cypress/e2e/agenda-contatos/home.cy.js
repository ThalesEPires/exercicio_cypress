/// <reference types="cypress" />

const { should } = require("chai")

describe('Testes da agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher as informações de um novo contato', () => {
        cy.get('input[type="text"]').type('Thales Pires')
        cy.get('input[type="email"]').type('teste@gmail.com')
        cy.get('input[type="tel"]').type('01 123456789')
        cy.get('.adicionar').first().click()
        cy.get('.contato').should('have.length', 4)
    })

    it('Deve editar as informações de um contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').type('Thales Eduardo')
        cy.get('input[type="email"]').type('teste01@gmail.com')
        cy.get('input[type="tel"]').type('01 12345678')
        cy.get('.alterar').click()
        cy.get('.contato').should('have.length', 4)
    })

    it('Deve deletar um contato', () => {
        cy.get('.delete').last().click()
        cy.get('.contato').should('have.length', 3)
    })
})