import { formatNumberWithWord } from "@core/utils";

/**
 * Function which formats date as a string like 21 ноября 2005 г. (16 лет)
 * @param {Date | string} date date which should be formatted
 * @return {string} formatted date
 *
 * @example
 * formatBirthdayWithAge(new Date(2005, 10, 21)) => "21 ноября 2005 г. (16 лет)"
 * formatBirthdayWithAge("2005-11-21") => "21 ноября 2005 г. (16 лет)"
 * formatBirthdayWithAge("2005-11-21T00:00:00.000Z") => "21 ноября 2005 г. (16 лет)"
 */
export function formatBirthdayWithAge(date: Date | string): string {
    date = new Date(date)

    /// format date as 21 November 2005
    const formattedDate = date.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    // calculate full year from this date
    const now = new Date().getTime()
    const age = new Date((now - date.getTime())).getFullYear() - 1970

    // format date as 21 ноября 2005 г. (16 лет)
    return `${ formattedDate } (${ formatNumberWithWord(age, ["год", "года", "лет"]) })`;
}

/**
 * Function which formats input value 2005-11-21 as 21.11.2005
 * @param {string} input value which should be formatted
 * @return {string} formatted value
 *
 * @example
 * formatInputDate("2005-11-21") => "21.11.2005"
 * formatInputDate("21.11.2005") => "21.11.2005"
 */
export function formatInputDate(input: string): string {
    const parts = input.split("-");
    if (parts.length !== 3) return input;
    return parts.reverse().join(".");
}