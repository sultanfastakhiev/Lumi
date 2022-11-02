import client from "@core/utils/axios";
import { Patient } from "@feats/patients/entities";
import { formatInputDate } from "@core/utils/formatters/date-formatter/date-formatter";

/**
 * Type used to create patient endpoint
 */
type CreatePatientPayload = Omit<Patient, "id" | "createdAt">

/**
 * Calling POST /patients/create_patient endpoint to create patient
 * @param {CreatePatientPayload} patient payload of patient which should be created
 * @return true on success and false on failure
 */
export async function createPatient(patient: CreatePatientPayload): Promise<boolean> {
    const { lastName, ...rest } = patient;
    
    const response = await client.post(
        "/patients/create_patient",
        {
            ...rest,
            birthday: formatInputDate(patient.birthday),
            last_name: lastName,
        },
    );
    return response.status === 200;
} 