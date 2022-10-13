import React from "react";
import styles from "./form-actions.module.scss";
import { ResetButton } from "@core/components/buttons/form/reset-button";
import { SubmitButton } from "@core/components/buttons/form/submit-button";
import classNames from "classnames";

export type FormActionsProps = {
    className?: string;
    resetText?: string;
    submitText?: string;
}

export const FormActions: React.FC<FormActionsProps> = (props) => {
    return <div className={ classNames(styles.formActions, props.className) }>
        <ResetButton size="md">{ props.resetText ?? "Reset" }</ResetButton>
        <SubmitButton size="md">{ props.submitText ?? "Save" }</SubmitButton>
    </div>
}