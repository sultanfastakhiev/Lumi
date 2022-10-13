import React from "react";
import styles from "./default.module.scss"

export type DefaultHeaderProps = {
    title: string;
    subtitle: string;
    children?: React.ReactNode;
}

export const DefaultHeader: React.FC<DefaultHeaderProps> = (props) => {
    return <header className={ styles.default }>
        <div className={ styles.title }>
            <h1>{ props.title }</h1>
            <p>{ props.subtitle }</p>
        </div>
        <div className={ styles.buttons }>
            {
                props.children
            }
        </div>
    </header>
}