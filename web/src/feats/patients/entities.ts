export type Patient = {
    id: string;
    lastName: string;
    name: string;
    patronymic: string;
    birthday: Date;
    consultations?: string;
    diagnosis?: string;
    operations?: string;
    doctorId: string;
    createdAt?: Date;
}

export function parsePatient(json: any) {
    const birthday = json.birthday.split(".")
    
    return {
        id: json.id,
        lastName: json.last_name,
        name: json.name,
        patronymic: json.patronymic,
        birthday: new Date(parseInt(birthday[2]), parseInt(birthday[1]) - 1, parseInt(birthday[0])),
        consultations: json.consultations,
        diagnosis: json.diagnosis,
        operations: json.operations,
        doctorId: json.doctor,
        createdAt: new Date(json.createdAt),
    };
}