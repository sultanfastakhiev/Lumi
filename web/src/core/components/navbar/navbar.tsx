import React from "react";
import styles from "./navbar.module.scss"
import { Menu } from "react-feather";
import { useSidebar } from "@core/hooks/use-sidebar";
import { Logo } from "@core/components/logo/logo";

export const NavBar: React.FC = () => {
    const {toggleSidebar} = useSidebar()

    return <nav className={ styles.navbar }>
        <Logo text/>
        <Menu color="var(--hint)" className={ styles.menu } onClick={ toggleSidebar }/>
    </nav>
}