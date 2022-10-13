import { Route } from "@router/router";
import { PatientsListPage } from "@feats/patients/pages/patients-list/patients-list";

export const patientsRoutes: Route[] = [
    {
        path: "/apps/patients",
        page: <PatientsListPage/>,
        authentication: true,
    }
]