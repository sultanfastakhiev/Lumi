import React from "react";
import { useRoutes } from "react-router";
import { routes } from "./routes";
import { AuthRestricted } from "./restricted";

export const Router: React.FC = () => {
    return useRoutes(routes.map(route => {
        let page = route.page
        if (route.authentication) {
            page = <AuthRestricted>{ page }</AuthRestricted>
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
}