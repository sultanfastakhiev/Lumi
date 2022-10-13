import React from "react";
import { useRoutes } from "react-router";
import { routes } from "./routes";
import { AuthRestricted, PermissionRestricted } from "./restricted";
import { Permission } from "@feats/auth/entities";

export const Router: React.FC = () => {
    return useRoutes(routes.map(route => {
        let page = route.page
        if (route.authentication) {
            page = <AuthRestricted>{ page }</AuthRestricted>
        }
        if (route.permissions && route.permissions.length > 0) {
            page = <PermissionRestricted permissions={ route.permissions }>{ route.page }</PermissionRestricted>
        }
        return {
            path: route.path,
            element: page,
        }
    }))
}

export type Route = {
    path: string,
    page: React.ReactNode,
    authentication?: boolean,
    permissions?: Permission[]
}