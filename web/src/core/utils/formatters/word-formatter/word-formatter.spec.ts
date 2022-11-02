import { formatNumberWithWord } from "@core/utils/";

describe("word formatters", () => {
    describe("formatNumberWithWord", () => {
        it('should format 1', function () {
            expect(formatNumberWithWord(1, ["год", "года", "лет"])).toEqual("1 год")
        });

        it('should format 2', function () {
            expect(formatNumberWithWord(2, ["год", "года", "лет"])).toEqual("2 года")
        });

        it('should format 5', function () {
            expect(formatNumberWithWord(5, ["год", "года", "лет"])).toEqual("5 лет")
        });

        it('should format 0', function () {
            expect(formatNumberWithWord(0, ["год", "года", "лет"])).toEqual("0 лет")
        });

        it('should format 21', function () {
            expect(formatNumberWithWord(21, ["год", "года", "лет"])).toEqual("21 год")
        });

        it('should format 22', function () {
            expect(formatNumberWithWord(22, ["год", "года", "лет"])).toEqual("22 года")
        });

        it('should format 25', function () {
            expect(formatNumberWithWord(25, ["год", "года", "лет"])).toEqual("25 лет")
        });

        it('should format 101', function () {
            expect(formatNumberWithWord(101, ["год", "года", "лет"])).toEqual("101 год")
        });

        it('should format 102', function () {
            expect(formatNumberWithWord(102, ["год", "года", "лет"])).toEqual("102 года")
        });

        it('should format 105', function () {
            expect(formatNumberWithWord(105, ["год", "года", "лет"])).toEqual("105 лет")
        });
    })
})