import React from "react";
import { ResponsiveValue } from "@chakra-ui/react";
import { useField, useFormikContext } from "formik";
import { Textarea, TextareaProps } from "react-untitled-ui";

export type Props = {
    name: string,
    col?: ResponsiveValue<number>,
} & TextareaProps

export const FormTextArea: React.FC<Props> = React.memo((props) => {
    const [field, meta] = useField(props.name);
    const {isSubmitting} = useFormikContext()

    const error = !!meta.error && meta.touched ? meta.error : undefined
    return <Textarea
        { ...field }
        { ...props }
        disabled={ isSubmitting }
        error={ error }/>
})