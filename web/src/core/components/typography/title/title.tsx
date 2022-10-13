import React from "react";
import styles from "./title.module.scss";

export type TitleProps = {
    children?: React.ReactNode
    suffix?: React.ReactNode
}

export const Title: React.FC<TitleProps> = (props) => {
    const title = <h1 className={styles.title}>{props.children}</h1>
    
    if (props.suffix) {
        return <div className={styles.row}>
            { title }
            { props.suffix }
        </div>
    }
    return title
}