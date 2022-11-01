import React from "react";
import classNames from "classnames";
import styles from "./layout.module.scss";
import { sidebarConfig as config } from "@config/sidebar";
import { NavBar, Sidebar } from "@core/components";

type LayoutProps = {
    className?: string,
    children: React.ReactNode,
    variant?: "default" | "full-width",
}

export const Layout: React.FC<LayoutProps> = (props) => {
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