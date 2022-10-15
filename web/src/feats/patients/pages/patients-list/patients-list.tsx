import React from "react";
import styles from "./patients-list.module.scss";
import { Layout } from "@core/components/layout/layout";
import { ContentWrapper } from "@core/components/content-wrapper/content-wrapper";
import { Title } from "@core/components/typography/title/title";
import { Button } from "react-untitled-ui";
import { Plus, Search } from "react-feather";
import { usePatientsList } from "@feats/patients/pages/patients-list/use-patients-list";
import { LoadingView } from "@core/components/loading/loading-view/loading-view";
import { PatientCard } from "@feats/patients/components/patient-card/patient-card";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export const PatientsListPage: React.FC = () => {
    const {data, isLoading} = usePatientsList();
    const navigate = useNavigate()

    return <Layout className={ styles.page }>
        <Helmet>
            <title>Мои пациенты | Lumi</title>
        </Helmet>
        {
            isLoading
                ? <LoadingView/>
                : <ContentWrapper>
                    {
                        data!.length === 0
                            ? <EmptyState/>
                            : <React.Fragment>
                                <Title
                                    suffix={ <Button
                                        onClick={ () => navigate("/apps/patients/create") }
                                        trailingIcon={ Plus }
                                        variant="secondary-gray">Создать пациента</Button> }>
                                    Мои пациенты
                                </Title>
                                <div className={ styles.grid }>
                                    {
                                        data!.map(patient => <PatientCard patient={ patient } key={ patient.id }/>)
                                    }
                                </div>
                            </React.Fragment>
                    }
                </ContentWrapper>
        }
    </Layout>
}

export const EmptyState: React.FC = () => {
    const navigate = useNavigate()

    return <div className={ styles.emptyState }>
        <Search className={ styles.icon }/>
        <h3 className={ styles.title }>Пациентов не найдено</h3>
        <span className={ styles.subtitle }>Нажмите на кнопку чтобы<br/>вашего первого пациента</span>
        <Button onClick={ () => navigate("/apps/patients/create") }>Создать пациента</Button>
    </div>
}
