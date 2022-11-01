import React from "react";
import styles from "./patients-list.module.scss";
import { ContentWrapper, Layout, LoadingView } from "@core/components";
import { Title } from "@core/components/typography/title/title";
import { Button } from "react-untitled-ui";
import { Plus, Search } from "react-feather";
import { usePatientsList } from "@feats/patients/pages/patients-list/use-patients-list";
import { PatientCard } from "@feats/patients/components/patient-card/patient-card";
import { useRouter } from "next/router";
import Head from "next/head";

export const PatientsListPage: React.FC = () => {
    const {data, isLoading} = usePatientsList();
    const router = useRouter()

    return <Layout className={ styles.page }>
        <Head>
            <title>Мои пациенты | Lumi</title>
        </Head>
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
                                        onClick={ () => router.push("/apps/patients/create") }
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
    const router = useRouter()

    return <div className={ styles.emptyState }>
        <Search className={ styles.icon }/>
        <h3 className={ styles.title }>Пациентов не найдено</h3>
        <span className={ styles.subtitle }>Нажмите на кнопку чтобы<br/>вашего первого пациента</span>
        <Button onClick={ () => router.push("/apps/patients/create") }>Создать пациента</Button>
    </div>
}
