class ArrayUtils {
    static areArraysContainsTheSameElements<T>(first: T[], second: T[]): boolean {
        return first.length === second.length &&
               first.every((element) => {
                   return second.includes(element);
               });
    }
}

export { ArrayUtils };