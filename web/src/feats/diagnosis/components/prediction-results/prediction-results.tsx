import React from "react";
import styles from "./prediction-results.module.scss";
import { Prediction } from "@feats/diagnosis/entities";
import { ProgressBar } from "react-untitled-ui";
import { DiagnosisResults } from "@feats/diagnosis/components/diagnosis-results/diagnosis-results";

export type NoResultsProps = {
    title?: string;
    notFoundText?: string;
    predictions: Prediction[];
}

export const PredictionResults: React.FC<NoResultsProps> = (props) => {
    return <div className={ styles.noResults }>
        <h5 className={ styles.title }>{ props.title ?? "Результаты" }</h5>
        {
            props.predictions.length === 0
                ? <p>{ props.notFoundText }</p>
                : <DiagnosisResults>
                    {
                        props.predictions.map((prediction, index) => {
                            return <ProgressBar
                                key={ `prediction-${ index }` }
                                label={ prediction.label }
                                progress={ prediction.probability }/>
                        })
                    }
                </DiagnosisResults>
        }
    </div>
}