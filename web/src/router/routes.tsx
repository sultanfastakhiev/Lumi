import { Page404 } from "./404/404";
import AuthService from "@feats/auth/auth-service";
import { Route } from "./router";

export const routes: Route[] = [
    {
        path: "*",
        page: <Page404/>,
    },
    // ...patientsRoutes,
    // ...diagnosisRoutes,
]

export function getHomeRoute(): string {
    if (AuthService.isSignedIn()) return "/apps/patients"
    return "/login"
}