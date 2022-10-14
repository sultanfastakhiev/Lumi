import { Patient } from "@feats/patients/entities";
import client from "@core/utils/axios";

type PatientInput = Omit<Patient, "createdAt" | "birthday"> & {
    birthday: string;
}

export async function updatePatient(patient: PatientInput): Promise<boolean> {
    const response = await client.patch(
        `/patients/${patient.id}`,
        {
            ...patient,
            birthday: patient.birthday
                .split("-")
                .reverse()
                .join("."),
            last_name: patient.lastName,
            consultations: patient.consultations === "" ? null : patient.consultations,
            diagnosis: patient.diagnosis === "" ? null : patient.diagnosis,
            operations: patient.operations === "" ? null : patient.operations,
        },
    );
    return response.status === 200;
}