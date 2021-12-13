import {HomePageSteps} from "../steps/home.page.steps";

describe('Todos application', (): void => {
    it("Case #6 - Click checkbox and reload the page", async (): Promise<void> => {
        await HomePageSteps.createNewTodo(1);
        await HomePageSteps.clickCheckboxAndReloadPage()
    });
});