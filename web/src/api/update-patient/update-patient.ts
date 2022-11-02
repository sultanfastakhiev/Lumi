import { Patient } from "@feats/patients/entities";
import client from "@core/utils/axios";
import { formatInputDate } from "@core/utils/formatters/date-formatter/date-formatter";

/**
 * Type used to update patient entity
 */
type PatientInput = Omit<Patient, "createdAt" | "doctorId">

/**
 * Calling PATCH /patients/{id} endpoint to update patient entity
 * @param {PatientInput} patient patient changes
 * @return true if patient was updated successfully or false otherwise
 */
export async function updatePatient(patient: PatientInput): Promise<boolean> {
    const { lastName, ...rest } = patient;
    
    const response = await client.patch(
        `/patients/${patient.id}`,
        {
            ...rest,
            birthday: formatInputDate(patient.birthday),
            last_name: lastName,
            consultations: patient.consultations === "" ? null : patient.consultations,
            diagnosis: patient.diagnosis === "" ? null : patient.diagnosis,
            operations: patient.operations === "" ? null : patient.operations,
        },
    );
    return response.status === 200;
}