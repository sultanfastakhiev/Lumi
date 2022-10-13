import React, { useCallback } from "react";
import { useField, useFormikContext } from "formik";
import { Dropdown, DropdownProps } from "react-untitled-ui";

export type FormDropdownProps = {
    name: string;
} & DropdownProps

export const FormDropdown: React.FC<FormDropdownProps> = (props) => {
    const [field, meta] = useField(props.name);
    const {isSubmitting, setFieldValue} = useFormikContext()

    const error = !!meta.error && meta.touched ? meta.error : undefined

    const handleChange = useCallback((v: any) => {
        setFieldValue(props.name, v)
    }, [props.name, setFieldValue])
    
    return <Dropdown
        { ...props }
        { ...field }
        onChange={ handleChange }
        disabled={ isSubmitting }
        error={ error }/>
}