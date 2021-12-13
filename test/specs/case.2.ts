import {HomePageSteps} from "../steps/home.page.steps";

describe('Todos application', (): void => {
    it("Case #2 - Delete record by checkbox", async (): Promise<void> => {
        const todoNames: string[] = await HomePageSteps.createNewTodo(1);
        await HomePageSteps.deleteNewTodoByCheckbox(todoNames[0]);
    });
});