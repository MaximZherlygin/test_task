import fs from 'fs';

class ConfigParser<T> {
    readonly config: T;

    constructor(path: string) {
        this.config = JSON.parse(fs.readFileSync(path).toString());
    }

    get getConfig(): T {
        return this.config;
    }
}

export { ConfigParser };