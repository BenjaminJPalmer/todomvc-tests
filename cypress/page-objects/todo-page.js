export class TodoPage {
    navigate() {
        // Url not required as baseUrl set in cypress.json
        cy.visit("")
    }

    addTodo(todoText) {
        cy.get(".new-todo").type(`${todoText}{enter}`)
    }

    validateTodoTxt(todoIndex, expectedText) {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
    }

    toggleSecondItem() {
        cy.get(".todo-list li:nth-child(2) .toggle").click()
    }

    toggleTodo() {
        cy.get(".toggle").click()
    }
}