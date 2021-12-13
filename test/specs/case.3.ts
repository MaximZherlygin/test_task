import {HomePageSteps} from "../steps/home.page.steps";
import {HomePage} from "../pageobjects/home.page";
import assert from "assert";

describe('Todos application', (): void => {
    it("Case #3 - After deleting record counter decrease by 1", async (): Promise<void> => {
        const count: number = 2;
        const todoNames: string[] = await HomePageSteps.createNewTodo(count);
        const homePage: HomePage = new HomePage();
        const currentCounter: number = Number(await homePage.getCounterText());
        await HomePageSteps.deleteNewTodoByButton(todoNames[count - 1]);
        const newCounter: number = Number(await homePage.getCounterText());
        const expectedCounter: number = currentCounter - 1;
        assert.strictEqual(newCounter, expectedCounter, `${newCounter} != ${expectedCounter}`);
    });
});