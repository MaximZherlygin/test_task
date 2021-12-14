import {HomePageSteps} from "../steps/home.page.steps";
import assert from "assert";

describe('Todos application', (): void => {
    it("Case #8 - Edit new record, don't press enter and reload page", async (): Promise<void> => {
        await HomePageSteps.createNewTodo(1);
        const [todoName, todoNameAfterReload]: string[] = await HomePageSteps.editNewTodoWithoutEnter();
        assert.strictEqual(todoNameAfterReload, todoName, `${todoNameAfterReload} != ${todoName}`);
    });
});