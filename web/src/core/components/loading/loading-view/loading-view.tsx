import React from "react";
import styles from "./loading-view.module.scss";
import { Spinner } from "react-untitled-ui";

export type LoadingViewProps = {

}

export const LoadingView: React.FC<LoadingViewProps> = () => {
    return <div className={styles.view}>
        <Spinner/>
    </div>
}