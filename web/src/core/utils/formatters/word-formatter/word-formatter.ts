/**
 * Function which takes number and word ending and returns string with number and correct word ending in russian
 * @param {number} number number which should be formatted
 * @param {[string, string, string]} word word endings in russian
 * @return {string} formatted number
 * 
 * @example
 * formatNumberWithWord(1, ["год", "года", "лет"]) => "1 год"
 * formatNumberWithWord(2, ["год", "года", "лет"]) => "2 года"
 * formatNumberWithWord(5, ["год", "года", "лет"]) => "5 лет"
 * formatNumberWithWord(0, ["год", "года", "лет"]) => "0 лет"
 * formatNumberWithWord(21, ["год", "года", "лет"]) => "21 год"
 */
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