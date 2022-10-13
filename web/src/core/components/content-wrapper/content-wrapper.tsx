import React from "react";
import styles from "./content-wrapper.module.scss";

export type ContentWrapperProps = {
    children?: React.ReactNode
}

export const ContentWrapper: React.FC<ContentWrapperProps> = (props) => {
    return <div className={ styles.page }>
        { props.children }
    </div>
}