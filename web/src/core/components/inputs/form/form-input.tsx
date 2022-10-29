import React from "react";
import { useField, useFormikContext } from "formik";
import { Textfield, TextfieldProps } from "react-untitled-ui";

export type Props = {
    name: string
} & TextfieldProps

export const FormInput: React.FC<Props> = React.memo((props) => {
    const [field, meta] = useField(props.name);
    const {isSubmitting} = useFormikContext()

    const error = !!meta.error && meta.touched ? meta.error : undefined
    
    return <Textfield { ...field } disabled={ isSubmitting } error={ error } { ...props }  />
})