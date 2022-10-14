import { Route } from "@router/router";
import { SkinCancer } from "@feats/diagnosis/pages/skin-cancer/skin-cancer";
import { BrainCancer } from "@feats/diagnosis/pages/brain-cancer/pages/brain-cancer";

export const diagnosisRoutes: Route[] = [
    {
        path: "/apps/diagnosis/skin-cancer",
        page: <SkinCancer/>,
        authentication: true,
    },
    {
        path: "/apps/diagnosis/brain-cancer",
        page: <BrainCancer/>,
        authentication: true,
    }
]