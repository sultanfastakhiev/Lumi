import React from "react";
import styles from "./sidebar.module.scss";
import {
    ContainerNavPage,
    isContainerNavPage,
    isNavPage,
    NavigationItem,
    NavPage,
    SidebarConfig,
    SubNavPage
} from "@core/types/layout";
import { useSidebar, useSidebarItem } from "@core/hooks/use-sidebar";
import { Logo } from "@core/components/logo/logo";
import { ChevronDown, LogOut, Settings } from "react-feather";
import { Avatar, Badge } from "react-untitled-ui";
import { Link } from "react-router-dom";
import { fullName } from "@feats/auth/entities";

export const Sidebar: React.FC<SidebarConfig> = React.memo((props) => {
    const {isSidebarOpened: open, toggleSidebar: toggle, user, handleLogout} = useSidebar()

    return <div className={ styles.sidebar } data-open={ open }>
        <div className={ styles.container } data-open={ open }>
            <div className={ styles.nav } data-open={ open }>
                <div className={ styles.header }>
                    <Logo/>
                    <div className={ styles.disposable }>
                        <h5 className={ styles.company }>
                            Untitled CMS
                        </h5>
                    </div>
                </div>
                <div className={ styles.navigation }>
                    {
                        props.items.map((item: NavigationItem) => {
                            if (item.type === "divider") return <SidebarDivider key={ item.key }/>
                            return <SidebarItem itemKey={ item.key! } { ...item }/>
                        })
                    }
                </div>
            </div>
            <div className={ styles.footer }>
                <div className={ styles.navigation }>
                    <SidebarItem
                        icon={ <Settings/> }
                        type="page"
                        text="Settings"
                        url="/apps/users/settings"
                        key="settings-nav-item"
                        itemKey="settings-nav-item"/>
                    <SidebarDivider/>
                    <div className={ styles.user }>
                        <Avatar onClick={ toggle } className={ styles.avatar } src={ user?.profileImage ?? undefined }/>
                        <div className={ styles.disposable }>
                            <div className={ styles.userDetails }>
                                <h5 className={ styles.userName }>{ fullName(user) }</h5>
                                <span className={ styles.userEmail }>{ user?.email ?? "" }</span>
                            </div>
                            <div className={ styles.logoutButton }>
                                <LogOut onClick={ handleLogout }/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={ styles.sidebarOverlay } data-open={ open } onClick={ toggle }/>
    </div>
})

export const SidebarItem: React.FC<(NavPage | ContainerNavPage) & { itemKey: string }> = React.memo((props) => {
    const {icon: Icon} = props
    const {
        open,
        collapsed,
        getCollapseProps,
        getToggleProps,
        hasChildren,
        active,
        activeChildren,
        handleItemClick,
    } = useSidebarItem(props as ContainerNavPage, props.itemKey)
    
    const Container = isNavPage(props) ? Link : "div"

    return <div className={ styles.navItemContainer }>
        <Container
            { ...getToggleProps() }
            to={ isNavPage(props) ? props.url : "#" }
            className={ styles.navItem }
            data-open={ open }
            data-active={ active }
            data-collapsed={ collapsed }>
            { Icon }
            <div className={ styles.disposable }>
                <span className={ styles.navText }>{ props.text }</span>
                {
                    hasChildren && <div className={ styles.arrow }>
                        <ChevronDown/>
                    </div>
                }
            </div>
        </Container>
        <div { ...getCollapseProps() } className={ styles.navChildren }>
            {
                isContainerNavPage(props) && props.children.map((item: SubNavPage, i) => {
                    return <Link
                        onClick={ handleItemClick }
                        to={ item.url }
                        key={ `${ props.itemKey }-${ i }` }
                        data-active={ i === activeChildren }
                        className={ styles.navChildrenItem }>
                        <span>{ item.text }</span>
                        { item.badge && <Badge color="blue-gray" className={ styles.badge }>{ item.badge }</Badge> }
                        { item.online && <div className={ styles.onlineCircle }/> }
                    </Link>
                })
            }
        </div>
    </div>
})

export const SidebarDivider: React.FC = React.memo(() => {
    return <div className={ styles.divider }/>
})
