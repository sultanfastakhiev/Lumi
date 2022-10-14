import client from "@core/utils/axios";
import { parsePatient, Patient } from "@feats/patients/entities";

export async function getPatient(id: string): Promise<Patient> {
    const response = await client.get(`/patients/${id}` );
    return parsePatient(response.data);
}