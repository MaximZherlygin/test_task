import {HomePageSteps} from "../steps/home.page.steps";
import assert from "assert";

describe('Todos application', (): void => {
    it("Case #5 - Edit new record and reload the page", async (): Promise<void> => {
        await HomePageSteps.createNewTodo(1);
        const [expectedName, newName] = await HomePageSteps.editNewTodo();
        assert.strictEqual(newName, expectedName, `${newName} != ${expectedName}`);

        const todoRefreshName: string = await HomePageSteps.reloadPageAndGetTodoName();
        assert.strictEqual(todoRefreshName, newName, `${todoRefreshName} != ${newName}`);
    });
});