import React from "react";
import styles from "./patients-list.module.scss";
import { Layout } from "@core/components/layout/layout";
import { ContentWrapper } from "@core/components/content-wrapper/content-wrapper";
import { Title } from "@core/components/typography/title/title";
import { Button } from "react-untitled-ui";
import { Plus } from "react-feather";
import { usePatientsList } from "@feats/patients/pages/patients-list/use-patients-list";
import { LoadingView } from "@core/components/loading/loading-view/loading-view";
import { PatientCard } from "@feats/patients/components/patient-card/patient-card";
import { useNavigate } from "react-router-dom";

export const PatientsListPage: React.FC = () => {
    const {data, isLoading} = usePatientsList();
    const navigate = useNavigate()

    return <Layout className={ styles.page }>
        {
            isLoading
                ? <LoadingView/>
                : <ContentWrapper>
                    <Title
                        suffix={ <Button 
                            onClick={() => navigate("/apps/patients/create")}
                            trailingIcon={ Plus }
                            variant="secondary-gray">Создать пациента</Button> }>
                        Мои пациенты
                    </Title>
                    <div className={ styles.grid }>
                        {
                            data!.map(patient => <PatientCard patient={ patient } key={ patient.id }/>)
                        }
                    </div>
                </ContentWrapper>
        }
    </Layout>
}