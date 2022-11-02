import { formatBirthdayWithAge, formatInputDate } from "@core/utils";

describe("date formatters", () => {
    describe("formatBirthdayWithAge", () => {
        it('should format date', function () {
            expect(formatBirthdayWithAge(new Date(2005, 10, 21))).toEqual("21 ноября 2005 г. (16 лет)")
        });

        it('should format YYYY-MM-DD', function () {
            expect(formatBirthdayWithAge("2005-11-21")).toEqual("21 ноября 2005 г. (16 лет)")
        });

        it('should format iso date ', function () {
            expect(formatBirthdayWithAge("2005-11-21T00:00:00.000Z")).toEqual("21 ноября 2005 г. (16 лет)")
        });
    })
    
    describe("formatInputDate", () => {
        it('should format YYYY-MM-DD', function () {
            expect(formatInputDate("2005-11-21")).toEqual("21.11.2005")
        });

        it('should format DD.MM.YYYY', function () {
            expect(formatInputDate("21.11.2005")).toEqual("21.11.2005")
        });
    });
});

