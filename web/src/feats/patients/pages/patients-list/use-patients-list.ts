import { fetchPatients } from "@api";
import { useQuery } from "@tanstack/react-query";

export function usePatientsList() {
    return useQuery(["patients"], fetchPatients);
}