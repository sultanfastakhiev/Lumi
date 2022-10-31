import React from "react";
import { useFormikContext } from "formik";
import { Button, ButtonProps } from "react-untitled-ui";

export const SubmitButton: React.FC<ButtonProps> = (props) => {
    const {isSubmitting} = useFormikContext()

    return <Button
        loading={ isSubmitting }
        type="submit"
        { ...props }>
        { props.children }
    </Button>
}