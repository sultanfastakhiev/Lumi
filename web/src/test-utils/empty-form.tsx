import React from "react";
import { Formik } from "formik";

export type EmptyFormProps = {
    children: React.ReactNode,
    initialValues?: any;
    onSubmit?: any;
}

export const EmptyForm: React.FC<EmptyFormProps> = (props) => {
    return <Formik
        initialValues={ props.initialValues || {} }
        onSubmit={ props.onSubmit || jest.fn() }>
        { props. children }
    </Formik>
}