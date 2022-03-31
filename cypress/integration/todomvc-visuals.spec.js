/// <reference types="cypress" />
import { TodoPage } from '../page-objects/todo-page'

describe('Visual validation', () => {
    const todoPage = new TodoPage()

    before(() => todoPage.navigate())

    beforeEach(() => cy.eyesOpen({
        appName: 'TAU Todomvc',
        batchName: 'TAU Todomvc Initial Test!',
        browser: [
            { name: 'chrome', width: 1024, height: 768 },
            { name: 'chrome', width: 800, height: 600 },
            { name: 'firefox', width: 1024, height: 768 },
            { deviceName: 'iPhone X' }
        ]
    }))

    afterEach(() => cy.eyesClose())

    it('Should look good', () => {
        cy.eyesCheckWindow('Empty todo list')

        todoPage.addTodo("Clean room")
        todoPage.addTodo("Learn JavaScript")
        cy.eyesCheckWindow('Two todos')

        todoPage.toggleItem(1)
        cy.eyesCheckWindow('Marked as completed')
    })
})