import React from "react";
import styles from "./diagnosis-layout.module.scss";

export type DiagnosisLayoutProps = {
    children?: React.ReactNode
}

export const DiagnosisLayout: React.FC<DiagnosisLayoutProps> = (props) => {
    return <div className={ styles.layout }>
        { props.children }
    </div>
}

export const LeftDiagnosisLayout: React.FC<DiagnosisLayoutProps> = (props) => {
    return <div className={ styles.left }>
        { props.children }
    </div>
}

export const RightDiagnosisLayout: React.FC<DiagnosisLayoutProps> = (props) => {
    return <div className={ styles.right }>
        { props.children }
    </div>
}