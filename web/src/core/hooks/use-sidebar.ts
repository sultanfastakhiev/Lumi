import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
    shrinkItem,
    openSidebar,
    selectIsSidebarItemExpanded,
    selectIsSidebarOpen,
    toggle, toggleExpand, selectIsSidebarMobileOpen, toggleMobile
} from "@core/redux/sidebar-reducer";
import { logout } from "@feats/auth/redux/auth/auth-reducer";
import { ContainerNavPage, isContainerNavPage, NavPage } from "@core/types/layout";
import useCollapse from "react-collapsed";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "@api/fetch-me";
import { isServer } from "@core/utils";
import { useMediaQuery } from "react-responsive";

/**
 * React hook that load & changes is sidebar opened UI property
 * @return {object} - object with isSidebarOpen property, toggleSidebar function, user property, logout function
 */
export function useSidebar() {
    const dispatch = useAppDispatch()
    const open = useAppSelector(selectIsSidebarOpen)
    const mobileOpen = useAppSelector(selectIsSidebarMobileOpen)
    const userData = useQuery(["me"], fetchMe)
    const router = useRouter()

    const isMobile = useMediaQuery({query: "(max-width: 767px)"})
    
    const toggleSidebar = useCallback(() => {
        if (isMobile) {
            dispatch(toggleMobile())
        } else {
            dispatch(toggle())
        }
    }, [dispatch, isMobile])

    return {
        isSidebarOpened: open,
        mobileOpen,
        toggleSidebar,
        toggleMainSidebar: () => dispatch(toggle()),
        handleLogout: useCallback(() => {
            dispatch(logout())
            return router.replace("/login")
        }, [router, dispatch]),
        user: userData.data,
    }
}

/**
 * React hook that used to watch for sidebar open state changes
 * @return {object} - object with isSidebarOpen property
 */
export function useSidebarItem(props: NavPage | ContainerNavPage, key: string) {
    const open = useAppSelector(selectIsSidebarOpen)
    const dispatch = useAppDispatch()
    const expanded = useAppSelector(selectIsSidebarItemExpanded(key))
    const [firstRender, setFirstRender] = useState(true)
    const isMobile = useMediaQuery({query: '(max-width: 767px)'})
    const router = useRouter()

    useEffect(() => {
        if (!firstRender && !open) dispatch(shrinkItem(key));
        setFirstRender(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])


    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse({
        isExpanded: isServer() && isContainerNavPage(props)
            ? props.children.some(x => router.pathname.includes(x.url))
            : expanded,
        onExpandStart: () => dispatch(openSidebar()),
    })

    return {
        open,
        hasChildren: isContainerNavPage(props) ? (props.children?.length ?? 0) > 0 : false,
        collapsed: !isExpanded,
        getCollapseProps,
        getToggleProps: () => getToggleProps({
            onClick: isContainerNavPage(props)
                ? () => dispatch(toggleExpand(key))
                : undefined
        }),
        active: isContainerNavPage(props)
            ? props.children?.some(x => router.pathname.includes(x.url)) ?? false
            : router.pathname.includes(props.url),
        activeChildren: isContainerNavPage(props)
            ? props.children.findIndex(x => router.pathname.includes(x.url))
            : undefined,
        handleItemClick: () => {
            if (isMobile) dispatch(toggleMobile());
        },
    }
}
