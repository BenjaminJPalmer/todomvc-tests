export class TodoPage {
    navigate() {
        // Url not required as baseUrl set in cypress.json
        cy.visit("")
    }

    addTodo(todoText) {
        // Add a new todo
        cy.get(".new-todo").type(`${todoText}{enter}`)
    }

    validateTodoTxt(todoIndex, expectedText) {
        // Verify the {todoIndex} text is correct
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
    }

    toggleItem(n) {
        // Toggle a nth todo item
        cy.get(`.todo-list li:nth-child(${n}) .toggle`).click()
    }
}