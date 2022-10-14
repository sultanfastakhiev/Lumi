import { Route } from "@router/router";
import { SkinCancer } from "@feats/diagnosis/pages/skin-cancer/skin-cancer";

export const diagnosisRoutes: Route[] = [
    {
        path: "/apps/diagnosis/skin-cancer",
        page: <SkinCancer/>,
        authentication: true,
    }
]