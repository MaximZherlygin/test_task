import {HomePage} from "../pageobjects/home.page";
import {HomePageSteps} from "../steps/home.page.steps";
import assert from "assert";

describe('Todos application', (): void => {
    it("Case #7 - Try to create empty todo", async (): Promise<void> => {
        const homePage: HomePage = new HomePage();
        assert.ok(await homePage.isOpened(), 'Home Page didn\'t opened');
        await HomePageSteps.clickInputAndPressEnter();
        assert.ok(await homePage.isTodoListEmpty(), "Todo list is not empty");
    });
});