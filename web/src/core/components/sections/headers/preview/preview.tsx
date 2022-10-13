import React from "react";
import styles from "./preview.module.scss"

export type PreviewHeaderProps = {
    badge: string;
    title: string;
    subtitle: string;
}

export const PreviewHeader: React.FC<PreviewHeaderProps> = (props) => {
    return <header className={ styles.preview }>
        <h2>{ props.badge }</h2>
        <h1>{ props.title }</h1>
        <p>{ props.subtitle }</p>
    </header>
}