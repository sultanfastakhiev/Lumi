import { FilePreview } from "@core/components";
import { render } from "@testing-library/react";
import { getFileSize } from "@core/components/file-preview/file-preview";

describe("FilePreview", () => {
    it("should render file name", () => {
        const testFile = new File([""], "test.jpeg", {type: "text/plain"});
        const {getByText} = render(<FilePreview file={ testFile }/>);
        expect(getByText("test.jpeg")).toBeInTheDocument();
    });
})

describe("getFileSize", () => {
    it("should return file size in bytes", () => {
        const testFile = new File([""], "test.txt", {type: "text/plain"});
        jest.spyOn(testFile, "size", "get").mockReturnValue(100);
        expect(getFileSize(testFile)).toBe("100 B");
    });

    it("should return file size in kb", () => {
        const testFile = new File([""], "test.txt", {type: "text/plain"});
        jest.spyOn(testFile, "size", "get").mockReturnValue(2070);
        expect(getFileSize(testFile)).toBe("2 KB");
    });

    it("should return file size in mb", () => {
        const testFile = new File([""], "test.txt", {type: "text/plain"});
        jest.spyOn(testFile, "size", "get").mockReturnValue(1_048_576 * 5 + 1239);
        expect(getFileSize(testFile)).toBe("5 MB");
    });

    it("should return file size in gb", () => {
        const testFile = new File([""], "test.txt", {type: "text/plain"});
        jest.spyOn(testFile, "size", "get").mockReturnValue(1_073_741_824 * 3 + 8294752);
        expect(getFileSize(testFile)).toBe("3 GB");
    });
});