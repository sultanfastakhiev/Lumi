import { parsePatient, Patient } from "@feats/patients/entities";
import client from "@core/utils/axios";

export async function fetchPatients(): Promise<Patient[]> {
    const response = await client.get("/patients");
    return response.data.result.map((json: any) => parsePatient(json));
}