import client from "@core/utils/axios";
import { parsePatient, Patient } from "@feats/patients/entities";

/**
 * Calling GET /patient/{id} endpoint to fetch doctor's patient by his id
 * @param id patient id to fetch
 * @returns {Patient} patient
 */
export async function getPatient(id: string): Promise<Patient> {
    const response = await client.get(`/patients/${id}` );
    return parsePatient(response.data);
}