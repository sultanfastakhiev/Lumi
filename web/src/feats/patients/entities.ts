import { flipDate } from "@core/utils";

export type Patient = {
    id: string;
    lastName: string;
    name: string;
    patronymic: string;
    birthday: string;
    consultations?: string;
    diagnosis?: string;
    operations?: string;
    doctorId: string;
    createdAt?: string;
}

export function fullName(patient: Patient) {
    let name = "";
    if (patient.lastName) name = patient.lastName;
    if (patient.name) name += " " + patient.name;
    if (patient.patronymic) name += " " + patient.patronymic;
    return name;
}

export function parsePatient(json: any): Patient {
    return {
        id: json.id,
        lastName: json.last_name,
        name: json.name,
        patronymic: json.patronymic,
        birthday: flipDate(json.birthday),  
        consultations: json.consultations,
        diagnosis: json.diagnosis,
        operations: json.operations,
        doctorId: json.doctor,
        createdAt:  json.createdAt ?? null,
    };
}