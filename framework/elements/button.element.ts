import {BaseElement} from './base/base.element';
import {WebElement} from "../types/wdio.types";

class Button extends BaseElement {
    async click(): Promise<void> {
        const element: WebElement = await this.waitForClickable({
            timeout: browser.options.waitforTimeout
        });
        element.click();
    }

    async clickInput(): Promise<void> {
        const element: WebElement = await this.findElement();
        element.click();
    }
}

export { Button };