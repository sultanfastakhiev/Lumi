import { fireEvent, render, waitFor } from "@testing-library/react";
import { PickedImage } from "@core/components";

describe("PickedImage", () => {
    it("should render", async () => {
        const file = new File([], "test.png", {type: "image/png"})
        const {getByRole} = render(<PickedImage file={ file }/>)
        await waitFor(() => {
            expect(getByRole("img")).toBeInTheDocument()
        })
    })

    it("should call onClick when clicked", async () => {
        const file = new File([], "test.png", {type: "image/png"})
        const onClick = jest.fn()
        const {getByRole} = render(<PickedImage file={ file } onClick={ onClick }/>)
        await waitFor(() => {
            fireEvent.click(getByRole("img"))
        })
        await waitFor(() => {
            expect(onClick).toHaveBeenCalledTimes(1)
        })
    })
})