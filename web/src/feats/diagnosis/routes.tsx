import { Route } from "@router/router";
import { SkinCancer } from "@feats/diagnosis/pages/skin-cancer/skin-cancer";
import { BrainCancer } from "@feats/diagnosis/pages/brain-cancer/brain-cancer";
import { KidneyDiseases } from "@feats/diagnosis/pages/kidney-diseases/kidney-diseases";
import { Analyzes } from "@feats/diagnosis/pages/analyzes/analyzes";

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
    },
    {
        path: "/apps/diagnosis/kidney-diseases",
        page: <KidneyDiseases/>,
        authentication: true,
    },
    {
        path: "/apps/diagnosis/analyzes",
        page: <Analyzes/>,
        authentication: true,
    }
]