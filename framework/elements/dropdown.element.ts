import {BaseElement} from "./base/base.element";
import {WebElement} from "../types/wdio.types";

class Dropdown extends BaseElement {
    async selectByIndex(idx: number): Promise<void> {
        const element: WebElement = await this.waitForVisible({
            timeout: browser.options.waitforTimeout,
        });
        await element.selectByIndex(idx);
    }
}

export { Dropdown };