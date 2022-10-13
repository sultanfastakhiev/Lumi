import { fetchPatients } from "@api/fetch-patients";
import { useQuery } from "@tanstack/react-query";

export function usePatientsList() {
    return useQuery(["patients"], fetchPatients);
}