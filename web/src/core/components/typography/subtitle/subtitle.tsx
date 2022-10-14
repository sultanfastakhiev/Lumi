import React from "react";
import styles from "./subtitle.module.scss";

export type SubtitleProps = {
    children?: React.ReactNode
}

export const Subtitle: React.FC<SubtitleProps> = (props) => {
    return <p className={ styles.subtitle }>
        { props.children }
    </p>
}