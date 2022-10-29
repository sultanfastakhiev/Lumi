import React from "react";
import styles from "./patient-card.module.scss";
import { fullName, Patient } from "@feats/patients/entities";
import { formatBirthdayWithAge } from "@core/utils/fomatters/date-formatter";
import { useRouter } from "next/router";

export type PatientCardProps = {
    patient: Patient
}

export const PatientCard: React.FC<PatientCardProps> = ({patient}) => {
    const router = useRouter()
    
    return <div className={ styles.card } onClick={() => router.push(`/apps/patients/${patient.id}`)}>
        <div className={ styles.name }>{ fullName(patient) }</div>
        <div className={styles.row}>
            <div className={styles.label}>Дата рождения</div>
            <div className={styles.value}>{ formatBirthdayWithAge(patient.birthday) }</div>
        </div>
        {
            patient.consultations && <div className={styles.row}>
                <div className={styles.label}>Консультации</div>
                <div className={styles.value}>{patient.consultations!.replaceAll("\n", ", ")}</div>
            </div>
        }
        {
            patient.diagnosis && <div className={styles.row}>
                <div className={styles.label}>Диагнозы</div>
                <div className={styles.value}>{patient.diagnosis!.replaceAll("\n", ", ")}</div>
            </div>
        }
        {
            patient.operations && <div className={styles.row}>
                <div className={styles.label}>Диагнозы</div>
                <div className={styles.value}>{patient.operations!.replaceAll("\n", ", ")}</div>
            </div>
        }
    </div>
}