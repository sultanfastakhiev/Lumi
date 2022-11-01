import React from "react";
import styles from "./create-patient.module.scss";
import { Title } from "@core/components/typography/title/title";
import { useCreatePatient } from "@feats/patients/pages/create-patient/use-create-patient";
import { Form, Formik } from "formik";
import { SubmitButton, FormInput, ContentWrapper, Layout } from "@core/components";
import Head from "next/head";

export type CreatePatientProps = {}

export const CreatePatient: React.FC<CreatePatientProps> = () => {
    const {formik} = useCreatePatient()

    return <Layout className={ styles.page }>
        <Head>
            <title>Создать пациента | Lumi</title>
        </Head>
        <Formik { ...formik }>
            <Form>
                <ContentWrapper>
                    <Title>Создать пациента</Title>
                    <div className={styles.grid}>
                        <FormInput
                            label="Фамилия"
                            name="lastName"
                            placeholder="Введите фамилию пациента"
                            fullWidth/>
                        <FormInput
                            label="Имя"
                            name="name"
                            placeholder="Введите имя пациента"
                            fullWidth/>
                        <FormInput
                            label="Отчество"
                            name="patronymic"
                            placeholder="Введите отчество пациента"
                            fullWidth/>
                        <FormInput
                            label="Дата рождения"
                            name="birthday"
                            placeholder="Введите дату рождения пациента"
                            type="date"
                            fullWidth/>
                    </div>
                    <SubmitButton>Создать пациента</SubmitButton>
                </ContentWrapper>
            </Form>
        </Formik>
    </Layout>
}