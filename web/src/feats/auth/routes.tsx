import { LoginPage } from "@feats/auth/pages/login/login";
import { AccountPage } from "@feats/auth/pages/account/account";
import { Route } from "@router/router";

export const authRoutes: Route[] = [
    {
        path: "/login",
        page: <LoginPage/>
    },
    {
        path: "/apps/auth/account",
        page: <AccountPage/>,
        authentication: true,
    }
]