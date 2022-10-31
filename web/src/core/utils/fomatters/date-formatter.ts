/// function that formats a date to a string like Mar 14, 2022
import { formatNumberWithWord } from "@core/utils/fomatters/word-formatter";

export function formatDate(date: Date): string {
    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    })
}

/// function which formats date as a string like 21 ноября 2005 г. (16 лет)
export function formatBirthdayWithAge(date: Date | string): string {
    date = new Date(date)
    
    /// format date as 21 November 2005
    const formattedDate = date.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    
    // calculate full year from this date
    const fullYear = date.getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - fullYear;
    
    // format date as 21 ноября 2005 г. (16 лет)
    return `${formattedDate} (${formatNumberWithWord(age, ["год", "года", "лет"])})`;
}

/**
 * Function which formats input value 2005-11-21 as 21.11.2005
 * @param input value which should be formatted
 * @return formatted value
 */
export function formatInputDate(input: string): string {
    const parts = input.split("-");
    return parts.reverse().join(".");
}