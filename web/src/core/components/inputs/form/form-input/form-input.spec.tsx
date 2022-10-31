import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { FormInput } from "@core/components";
import { Form, Formik } from "formik";

describe("FormInput", () => {
    it("should render input", () => {
        const {getByTestId} = render(<FormInput name="test" data-testid="input"/>);
        expect(getByTestId("input")).toBeInTheDocument();
    });

    it("should render formik error", async () => {
        const {getByText, container} = render(
            <Formik
                initialValues={ {test: ""} }
                onSubmit={ jest.fn() }
                validate={ () => ({test: "error"}) }>
                <Form>
                    <FormInput name="test"/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        );

        act(() => {
            fireEvent.click(getByText("Submit"));
        });

        await waitFor(() => {
            const form = container.children[0]
            expect(form.children[0].className).toEqual("untitled-textfield__container untitled-error");
            expect(getByText("error")).toBeInTheDocument();
        })
    });
});