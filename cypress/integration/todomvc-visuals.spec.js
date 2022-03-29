/// <reference types="cypress" />
import * as todoPage from '../page-objects/todo-page'

describe('Visual validation', () => {
    before(() => todoPage.navigate())

    it('Should look good', () => {
        todoPage.addTodo("Clean room")
        todoPage.addTodo("Learn JavaScript")
        
        todoPage.toggleTodo(0)
    })
})