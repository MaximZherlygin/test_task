import {BasePage} from "../../framework/pages/base.page";
import {TextBox} from "../../framework/elements/textbox.element";
import {Text} from "../../framework/elements/text.element";
import {Button} from "../../framework/elements/button.element";
import {Form} from "../../framework/elements/form.element";

class HomePage extends BasePage {

    // Init of all page locators
    todoTextByNameLocator: string = '//li//label[text() = "{name}"]';

    // Init of all page elements
    newTodoTextBox: TextBox = new TextBox('//input[contains(@class, "new-todo")]',
                                          'New Todo Textbox');
    deleteButton: Button = new Button('//li[last()]//button[contains(@class, "destroy")]',
                                      'Delete todo button');
    lastTodoText: Text = new Text('//li[last()]//div[contains(@class, "view")]//label', "New todo record text");
    toDoForm: Form = new Form('//li[last()]//div[contains(@class, "view")]', "New Todo");
    counterText: Text = new Text('//span[contains(@class, "todo-count")]//strong', 'Counter text');
    checkBoxButton: Button = new Button('//li[last()]//input[@class = "toggle"]', 'Checkbox button');
    clearCompletedButton: Button = new Button('//button[contains(@class, "clear-completed")]', 'Clear completed button');
    editTextBox: TextBox = new TextBox('//input[@class = "edit"]', 'Edit Textbox');

    constructor() {
        super('//todo-app', 'Todos app home page');
    }

    async enterRandomTodo(randomStr: string): Promise<void> {
        await this.newTodoTextBox.sendText(randomStr);
    }

    async getNewTodoText(): Promise<string> {
        return this.lastTodoText.getText();
    }

    async clickDeleteButton(): Promise<void> {
        await this.toDoForm.moveCursorToElement();
        return this.deleteButton.click();
    }

    async isTodoDeleted(name: string): Promise<boolean> {
        const element: Text = new Text(this.todoTextByNameLocator.replace("{name}", name), 'Todo text');
        return element.isNotVisible();
    }

    async getCounterText(): Promise<string> {
        return this.counterText.getText();
    }

    async isCounterDisappeared(): Promise<boolean> {
        return this.counterText.isNotExist();
    }

    async clickCheckboxButton(): Promise<void> {
        return this.checkBoxButton.clickInput();
    }

    async clickClearCompletedButton(): Promise<void> {
        return this.clearCompletedButton.click();
    }

    async doubleClickLastTodoText(): Promise<void> {
        return this.lastTodoText.doubleClick();
    }

    async editTodoText(newText: string): Promise<void> {
        return this.editTextBox.sendTextWithoutClear(newText);
    }
}

export { HomePage }