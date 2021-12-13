import randomstring from 'randomstring';

class RandomUtils {

    static getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static selectRandomElementsFromArray<T>(array: T[], count: number): T[] {
        const elementsArray: T[] = array;
        const resultArray: T[] = [];
        for (let i = 0; i < count; i++) {
            const idx: number = this.getRandomInt(0, elementsArray.length);
            resultArray.push(elementsArray[idx]);
            elementsArray.splice(idx, 1);
        }
        return resultArray;
    }

    static generateRandomString(length: number): string {
        return randomstring.generate({
            length: length,
        });
    }
}

export { RandomUtils };