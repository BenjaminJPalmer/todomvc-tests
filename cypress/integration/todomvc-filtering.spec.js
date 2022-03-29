/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page"

describe("Todo filtering", () => {
    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate("")

        todoPage.addTodo("Learn Cypress")
        todoPage.addTodo("Clean room")
        todoPage.addTodo("Use Cypress")

        todoPage.toggleItem(2)
    })

    it('Should filter "Active" todos', () => {
        cy.contains("Active").click()

        cy.get(".todo-list li").should("have.length", 2)
    })

    it('Should filter "Completed" todos', () => {
        cy.contains("Completed").click()

        cy.get(".todo-list li").should("have.length", 1)
    })

    it('Should filter "All" todos', () => {
        cy.contains("All").click()

        cy.get(".todo-list li").should("have.length", 3)
    })
})