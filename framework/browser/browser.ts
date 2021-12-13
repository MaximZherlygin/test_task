class Browser {
    static async open(path = ''): Promise<void> {
        await browser.url(browser.options.baseUrl + path);
    }

    static async sendKey(key: string): Promise<void> {
        await browser.keys(key);
    }

    static async refresh(): Promise<void> {
        await browser.refresh();
    }
}

export { Browser };