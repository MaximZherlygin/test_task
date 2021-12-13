import {HomePageSteps} from "../steps/home.page.steps";
import {HomePage} from "../pageobjects/home.page";
import assert from "assert";

describe('Todos application', (): void => {
    it('Case #1 - Delete record by delete button', async (): Promise<void> => {
        const todoNames: string[] = await HomePageSteps.createNewTodo(1);
        await HomePageSteps.deleteNewTodoByButton(todoNames[0]);
        const homePage: HomePage = new HomePage();
        assert.ok(await homePage.isCounterDisappeared(), "Counter is not disappeared");
    });
});