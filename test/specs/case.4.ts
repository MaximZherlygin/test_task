import {HomePageSteps} from "../steps/home.page.steps";
import assert from "assert";

describe('Todos application', (): void => {
    it("Case #4 - Edit new record", async (): Promise<void> => {
        await HomePageSteps.createNewTodo(1);
        const [expectedName, newName] = await HomePageSteps.editNewTodo();
        assert.strictEqual(newName, expectedName, `${newName} != ${expectedName}`);
    });
});