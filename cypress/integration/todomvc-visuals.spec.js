/// <reference types="cypress" />
import { TodoPage } from '../page-objects/todo-page'

describe('Visual validation', () => {
    const todoPage = new TodoPage()

    before(() => todoPage.navigate())

    it('Should look good', () => {
        todoPage.addTodo("Clean room")
        todoPage.addTodo("Learn JavaScript")
        
        todoPage.toggleItem(1)
    })
})