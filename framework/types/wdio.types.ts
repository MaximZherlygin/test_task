export type WebElement = WebdriverIO.Element;

export type Config = {
    email: string;
    password: string;
}

export type WaitForParams = {
    timeout: number | undefined;
    reverse?: boolean;
}