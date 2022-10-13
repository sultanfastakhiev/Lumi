import { Page404 } from "./404/404";
import { authRoutes } from "@feats/auth/routes";
import AuthService from "@feats/auth/auth-service";
import { Route } from "./router";

export const routes: Route[] = [
    {
        path: "*",
        page: <Page404/>,
    },
    ...authRoutes,
]

export function getHomeRoute(): string {
    if (AuthService.isSignedIn()) return "/apps/users/list"
    return "/login"
}