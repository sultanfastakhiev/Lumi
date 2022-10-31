import { SubmitButton } from "@core/components";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Form, Formik } from "formik";

describe("SubmitButton", () => {
    it("should render", () => {
        render(

            <Formik
                initialValues={ {} }
                onSubmit={ jest.fn() }>
                <Form>
                    <SubmitButton>My Submit button</SubmitButton>
                </Form>
            </Formik>
        );
    })

    it('should submit form on click', async function () {
        const submit = jest.fn();

        render(
            <Formik
                initialValues={ {} }
                onSubmit={ submit }>
                <Form>
                    <SubmitButton>Submit</SubmitButton>
                </Form>
            </Formik>
        )

        fireEvent.click(screen.getByText('Submit'))

        await waitFor(() => expect(submit).toHaveBeenCalled())
    });

    it('should disable button on submitting', async function () {
        const submit = jest.fn();

        render(
            <Formik
                initialValues={ {} }
                onSubmit={ submit }>
                <Form>
                    <SubmitButton>Submit</SubmitButton>
                </Form>
            </Formik>
        )

        fireEvent.click(screen.getByText('Submit'));
        fireEvent.click(screen.getByText('Submit'));

        await waitFor(() => expect(submit).not.toHaveBeenCalledTimes(1))
        await waitFor(() => expect(submit).not.toHaveBeenCalledTimes(1))
    });
})