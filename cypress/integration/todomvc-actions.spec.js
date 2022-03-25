/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe("Todo actions", () => {
    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate()
        todoPage.addTodo("Learn Cypress")
    })

    it('Should add a new todo to the list', () => {
        todoPage.validateTodoTxt(0, "Learn Cypress")
        cy.get('.toggle').should("not.be.checked")
    })

    it("Should mark a todo to the list", () => {
        cy.get('.toggle').click()
        cy.get(".view > label").should("have.css", "text-decoration-line", "line-through")
    })

    it("Should clear completed todos", () => {
        cy.get('.toggle').click()

        cy.contains("Clear completed").click()
        cy.get(".todo-list").should("not.have.descendants", "li")
    })
})