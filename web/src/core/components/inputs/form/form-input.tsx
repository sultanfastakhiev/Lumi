import React from "react";
import { GridItem, ResponsiveValue } from "@chakra-ui/react";
import { useField, useFormikContext } from "formik";
import { Textfield, TextfieldProps } from "react-untitled-ui";

export type Props = {
    col?: ResponsiveValue<number>,
    name: string
} & TextfieldProps

export const FormInput: React.FC<Props> = React.memo((props) => {
    const [field, meta] = useField(props.name);
    const {isSubmitting} = useFormikContext()
    
    const error = !!meta.error && meta.touched ? meta.error : undefined
    
    const { col, ...rest } = props

    const core = <Textfield { ...field } disabled={ isSubmitting } error={ error } { ...rest }  />
    
    if (!col) return core
    
    return <GridItem colSpan={ col } role="grid-container">
        { core }
    </GridItem>
})