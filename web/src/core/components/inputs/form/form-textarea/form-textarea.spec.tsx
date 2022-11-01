import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { FormTextArea } from "@core/components";
import { Form, Formik } from "formik";
import { EmptyForm } from "@test-utils";

describe("FormTextarea", () => {
    it("should render input", () => {
        const {getByTestId} = render(<EmptyForm>
            <FormTextArea name="test" data-testid="input"/>
        </EmptyForm>);
        expect(getByTestId("input")).toBeInTheDocument();
    });

    it("should render formik error", async () => {
        const {getByText, container} = render(
            <Formik
                initialValues={ {test: ""} }
                onSubmit={ jest.fn() }
                validate={ () => ({test: "error"}) }>
                <Form>
                    <FormTextArea name="test"/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        );

        act(() => {
            fireEvent.click(getByText("Submit"));
        });

        await waitFor(() => {
            const form = container.children[0]
            expect(form.children[0].className).toEqual("untitled-textfield__container untitled-error untitled-textarea");
            expect(getByText("error")).toBeInTheDocument();
        })
    });
});