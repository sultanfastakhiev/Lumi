import React from "react";
import { useFormikContext } from "formik";
import { Button, ButtonProps } from "react-untitled-ui";

type Props = {
    children: React.ReactNode,
} & ButtonProps

export const ResetButton: React.FC<Props> = (props) => {
    const {isSubmitting} = useFormikContext()

    return <Button
        { ...props }
        variant="secondary-gray"
        disabled={ isSubmitting }
        type="reset">
        { props.children }
    </Button>
}