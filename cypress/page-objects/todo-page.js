export class TodoPage {
    navigate() {
        cy.visit('https://todomvc.com/examples/vanillajs/')
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
}