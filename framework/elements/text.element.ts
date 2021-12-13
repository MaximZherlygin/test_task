import { BaseElement } from './base/base.element';
import {WebElement} from "../types/wdio.types";

class Text extends BaseElement {
    async getText(): Promise<string> {
        const element: WebElement = await this.waitForVisible({
            timeout: browser.options.waitforTimeout,
        });
        return element.getText();
    }
}

export { Text };