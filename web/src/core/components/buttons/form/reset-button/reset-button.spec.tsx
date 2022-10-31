import { ResetButton } from "@core/components";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Form, Formik } from "formik";

it("should render", () => {
    render(<ResetButton>Reset</ResetButton>);
})

it('should reset form on click', async function () {
    const reset = jest.fn();

    render(
        <Formik
            initialValues={ {} }
            onReset={ reset }
            onSubmit={ jest.fn() }>
            <Form>
                <ResetButton>Reset</ResetButton>
            </Form>
        </Formik>
    )

    fireEvent.click(screen.getByText('Reset'))

    await waitFor(() => expect(reset).toHaveBeenCalled())
});

it('should disable button on submitting', async function () {
    const reset = jest.fn();

    render(
        <Formik
            initialValues={ {} }
            onReset={ reset }
            onSubmit={ jest.fn() }>
            <Form>
                <ResetButton>Reset</ResetButton>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )

    fireEvent.click(screen.getByText('Submit'));
    fireEvent.click(screen.getByText('Reset'))

    await waitFor(() => expect(reset).not.toHaveBeenCalled())
}); 