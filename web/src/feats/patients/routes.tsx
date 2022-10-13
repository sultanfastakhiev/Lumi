import { Route } from "@router/router";
import { PatientsListPage } from "@feats/patients/pages/patients-list/patients-list";
import { CreatePatient } from "@feats/patients/pages/create-patient/create-patient";
import { PatientDetail } from "@feats/patients/pages/patient-detail/patient-detail";

export const patientsRoutes: Route[] = [
    {
        path: "/apps/patients",
        page: <PatientsListPage/>,
        authentication: true,
    },
    {
        path: "/apps/patients/create",
        page: <CreatePatient/>,
        authentication: true,
    },
    {
        path: "/apps/patients/:id",
        page: <PatientDetail/>,
        authentication: true,
    },
]