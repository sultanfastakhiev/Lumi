import React from "react";

export type NavPage = {
    type: "page",
    icon: React.ReactNode,
    text: string,
    url: string,
    key: string;
}

export function isNavPage(x: any): x is NavPage {
    return x.type === "page" && !x.children;
}

export type ContainerNavPage = Omit<NavPage, "url"> & {
    children: SubNavPage[],
}

export function isContainerNavPage(page: any): page is ContainerNavPage {
    return (page as ContainerNavPage).children !== undefined
}

export type SubNavPage = Omit<NavPage, "type" | "icon" | "children" | "key"> & {
    badge?: number,
    online?: boolean,
}

export type NavDivider = {
    type: "divider",
    key: string;
}

export type NavigationItem = NavPage | ContainerNavPage | NavDivider

export type SidebarConfig = {
    items: NavigationItem[],
}

export type NavbarConfig = {}