import React from "react";
import styles from "./fields.module.scss"
import classNames from "classnames";
import {
    FormActions as CoreFormActions,
    FormActionsProps
} from "@core/components/buttons/form/form-actions/form-actions";

export type Props = {
    children?: React.ReactNode;
    className?: string;
    type?: PageType;
}

type PageType = "default" | "table"

export const PageContainer: React.FC<Props> = (props) => {
    const className = classNames(
        props.className,
        styles.pageContainer,
        {
            [styles.table]: props.type === "table",
        }
    )

    return <div className={ className }>
        { props.children }
    </div>
}

export const Title: React.FC<Props> = (props) => {
    const className = classNames(
        props.className,
        styles.title,
        {
            [styles.table]: props.type === "table",
        }
    )

    return <div className={ className }>
        { props.children }
    </div>
}

export const Field: React.FC<Props> = (props) => {
    return <div className={ styles.fieldContainer }>
        <div className={ styles.field }>
            { props.children }
        </div>
    </div>
}

export const FieldLabel: React.FC<Props> = (props) => {
    return <div className={ styles.fieldLabel }>{ props.children }</div>
}

export const FieldsContainer: React.FC<Props> = (props) => {
    const className = classNames(
        props.className,
        styles.fields,
    )

    return <div className={ className }>{ props.children }</div>
}


export const FormActions: React.FC<FormActionsProps> = (props) => {
    return <CoreFormActions className={ styles.formActions } { ...props }/>
}