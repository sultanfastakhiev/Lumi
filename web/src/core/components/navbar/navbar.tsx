import React from "react";
import styles from "./navbar.module.scss"
import { Menu } from "react-feather";
import { useSidebar } from "@core/hooks/use-sidebar";
import { Logo } from "@core/components";

export const NavBar: React.FC = React.memo(() => {
    const {toggleSidebar} = useSidebar()

    return <nav className={ styles.navbar }>
        <Logo text/>
        <Menu className={ styles.menu } onClick={ toggleSidebar } data-testid="menu-icon"/>
    </nav>
})