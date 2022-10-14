import React from "react";
import styles from "./diagnosis-results.module.scss";

export type DiagnosisResultsProps = {
    children: React.ReactNode
}

export const DiagnosisResults: React.FC<DiagnosisResultsProps> = (props) => {
    return <div className={styles.diagnosisResults}>
        {props.children}
    </div>
}