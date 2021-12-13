import {WebElement} from "../types/wdio.types";

class BasePage {
    readonly selector: string;
    readonly pageName: string;

    constructor(selector: string, pageName: string) {
        this.selector = selector;
        this.pageName = pageName;
    }

    async getElement(): Promise<WebElement> {
        return $(this.selector);
    }

    async isOpened(): Promise<boolean> {
        const element: WebElement = await this.getElement();
        await element.waitForExist({
            timeout: browser.options.waitforTimeout,
        });
        return await element.isExisting();
    }
}

export { BasePage };