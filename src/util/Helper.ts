export const numberToColumn = (n: number): any => {
    const res = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[n % 26];

    return n >= 26 ? numberToColumn(Math.floor(n / 26) - 1) + res : res;
};
