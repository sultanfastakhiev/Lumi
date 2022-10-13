import { Page404 } from "./404/404";
import { authRoutes } from "@feats/auth/routes";
import AuthService from "@feats/auth/auth-service";
import { Route } from "./router";
import { patientsRoutes } from "@feats/patients/routes";

export const routes: Route[] = [
    {
        path: "*",
        page: <Page404/>,
    },
    ...authRoutes,
    ...patientsRoutes,
]

export function getHomeRoute(): string {
    if (AuthService.isSignedIn()) return "/apps/patients"
    return "/login"
}