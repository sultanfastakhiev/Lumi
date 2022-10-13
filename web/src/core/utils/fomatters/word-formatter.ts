/// Function which takes number and word ending and returns string with number and correct word ending in russian
export function formatNumberWithWord(number: number, word: [string, string, string]): string {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;
    if (lastDigit === 1 && lastTwoDigits !== 11) {
        return `${number} ${word[0]}`;
    }
    if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20)) {
        return `${number} ${word[1]}`;
    }
    return `${number} ${word[2]}`;
}