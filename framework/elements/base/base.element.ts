import {WaitForParams, WebElement} from "../../types/wdio.types";

class BaseElement {

    readonly selector: string;
    readonly elementName: string;

    constructor(selector: string, elementName: string) {
        this.selector = selector;
        this.elementName = elementName;
    }

    get getSelector(): string {
        return this.selector;
    }

    get getName(): string {
        return this.elementName;
    }

    async getElement(): Promise<WebElement> {
        return $(this.getSelector);
    }

    async findElement(): Promise<WebElement> {
        const element: WebElement = await this.getElement();
        await element.waitForExist({
            timeout: browser.options.waitforTimeout,
        });
        return element;
    }

    async isExist(): Promise<boolean> {
        const element: WebElement = await this.findElement();
        return await element.isExisting();
    }

    async isNotExist(): Promise<boolean> {
        const element: WebElement = await this.getElement();
        await element.waitForExist({
            timeout: browser.options.waitforTimeout,
            reverse: true
        });
        return !await element.isExisting();
    }

    async isNotVisible(): Promise<boolean> {
        const element: WebElement = await this.getElement();
        await element.waitForDisplayed({
            timeout: browser.options.waitforTimeout,
            reverse: true
        });
        return !await element.isDisplayed();
    }

    async waitForClickable(params: WaitForParams): Promise<WebElement> {
        const element: WebElement = await this.findElement();
        await element.waitForDisplayed(params);
        await element.waitForClickable(params);
        return element;
    }

    async waitForVisible(params: WaitForParams): Promise<WebElement> {
        const element: WebElement = await this.findElement();
        await element.waitForDisplayed(params);
        return element;
    }

    async waitForExist(params: WaitForParams): Promise<WebElement> {
        const element: WebElement = await this.findElement();
        await element.waitForExist(params);
        return element;
    }

    async moveCursorToElement(xOffset: number = 0, yOffset: number = 0): Promise<void> {
        const element: WebElement = await this.getElement();
        if (xOffset === 0 && yOffset === 0) {
            return element.moveTo();
        } else {
            return element.moveTo({xOffset, yOffset});
        }
    }

    async doubleClick(): Promise<void> {
        const element: WebElement = await this.getElement();
        await element.doubleClick();
    }

    async sendText(text: string): Promise<void> {
        const element: WebElement = await this.findElement();
        await element.setValue(text);
    }

    async sendTextWithoutClear(text: string): Promise<void> {
        const element: WebElement = await this.findElement();
        await element.addValue(text);
    }
}

export { BaseElement };