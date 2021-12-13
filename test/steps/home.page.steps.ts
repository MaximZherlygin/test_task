import {HomePage} from "../pageobjects/home.page";
import {RandomUtils} from "../../framework/utils/random.utils";
import {Browser} from "../../framework/browser/browser";
import {Keys} from "../../framework/constants/keys.constants";
import assert from "assert";

class HomePageSteps {
    static async createNewTodo(count: number): Promise<string[]> {
        const homePage: HomePage = await new HomePage();
        // await new Promise(resolve => setTimeout(resolve, 10000));
        assert.ok(await homePage.isOpened(), 'Home Page didn\'t opened');
        const todoNames: string[] = [];
        for (let i = 0; i < count; i++) {
            const stringLength = 5;
            const randomString: string = RandomUtils.generateRandomString(stringLength);
            todoNames.push(randomString);
            await homePage.enterRandomTodo(randomString);
            await Browser.sendKey(Keys.Enter);
            const newTodoText: string = await homePage.getNewTodoText();
            assert.strictEqual(newTodoText, randomString, `${newTodoText} != ${randomString}`);
        }

        const counterValue: string = await homePage.getCounterText();
        const expectedCounterValue = String(count);
        assert.strictEqual(counterValue, expectedCounterValue, `${counterValue} != ${expectedCounterValue}`);
        return todoNames;
    }

    static async deleteNewTodoByButton(name: string): Promise<void> {
        const homePage: HomePage = await new HomePage();
        await homePage.clickDeleteButton();
        assert.ok(await homePage.isTodoDeleted(name), "Todo is not deleted");
    }

    static async deleteNewTodoByCheckbox(name: string): Promise<void> {
        const homePage: HomePage = await new HomePage();
        assert.ok(await homePage.isOpened());

        const currentCounterValue = Number(await homePage.getCounterText());
        await homePage.clickCheckboxButton();
        const newCounterValue = Number(await homePage.getCounterText());
        const expectedValue: number = currentCounterValue - 1;
        assert.strictEqual(newCounterValue, expectedValue, `${newCounterValue} != ${expectedValue}`);

        await homePage.clickClearCompletedButton();
        assert.ok(await homePage.isTodoDeleted(name), "Todo is not deleted");
        assert.ok(await homePage.isCounterDisappeared(), "Counter is not disappeared");
    }

    static async editNewTodo(): Promise<string[]> {
        const homePage: HomePage = new HomePage();
        const todoName: string = await homePage.getNewTodoText();
        await homePage.doubleClickLastTodoText();
        const stringLength: number = 5;
        const randomString: string = RandomUtils.generateRandomString(stringLength);
        await homePage.editTodoText(randomString);
        await Browser.sendKey(Keys.Enter);
        const newTodoName: string = await homePage.getNewTodoText();

        return [todoName + randomString, newTodoName];
    }

    static async reloadPageAndGetTodoName(): Promise<string> {
        await Browser.refresh();
        const homePage: HomePage = new HomePage();
        assert.ok(await homePage.isOpened());
        return await homePage.getNewTodoText();
    }
}

export { HomePageSteps };