import client from "@core/utils/axios";
import { Patient } from "@feats/patients/entities";

type PatientInput = Omit<Patient, "id" | "createdAt" | "birthday"> & {
    birthday: string;
}

export async function createPatient(patient: PatientInput): Promise<boolean> {
    const response = await client.post(
        "/patients/create_patient",
        {
            ...patient,
            birthday: patient.birthday.replaceAll("-", "."),
            last_name: patient.lastName,
        },
    );
    return response.status === 200;
} 