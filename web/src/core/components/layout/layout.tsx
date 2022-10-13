import React from "react";
import styles from "./layout.module.scss";
import { Sidebar } from "@core/components/sidebar/sidebar";
import { sidebarConfig as config } from "@config/sidebar";
import classNames from "classnames";
import { NavBar } from "@core/components/navbar/navbar";

type Props = {
    className?: string,
    children: React.ReactNode,
    variant?: "default" | "full-width",
}

export const Layout: React.FC<Props> = (props) => {
    return <div className={ styles.layout } data-variant={ props.variant ?? 'default' }>
        <Sidebar { ...config } key="core/sidebar"/>
        <div className={ styles.editView }>
            <NavBar/>
            <div className={ classNames(styles.content, props.className) }>
                { props.children }
            </div>
        </div>
    </div>
}