import { FormPasswordInput } from "@core/components";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { EmptyForm } from "@test-utils";

describe("FormPasswordInput", () => {
    it('should render', function () {
        render(
            <EmptyForm>
                <FormPasswordInput name="test"/>
            </EmptyForm>
        )
    })

    it('should show password on eye click', async function () {
        const {findByTestId, findByPlaceholderText} = render(
            <EmptyForm>
                <FormPasswordInput name="test" placeholder="test"/>
            </EmptyForm>
        )

        const eye = await findByTestId("icon-eye")
        fireEvent.click(eye)

        await waitFor(() => {
            //expect do not find eye icon
            expect(findByTestId("icon-eye")).rejects.toThrow()
            
            // expect find eye off icon
            expect(findByTestId("icon-eye-off")).resolves.toBeTruthy()
        })

        const input = await findByPlaceholderText("test") as HTMLInputElement
        expect(input.type).toEqual("text")


    })
})