import { LoginPage } from "@feats/auth/pages/login/login";
import { Route } from "@router/router";
import { SignupPage } from "@feats/auth/pages/signup/signup";

export const authRoutes: Route[] = [
    {
        path: "/login",
        page: <LoginPage/>
    },
    {
        path: "/signup",
        page: <SignupPage/>,
    }
]