import React from "react";
import { Layout } from "@core/components/layout/layout";
import styles from "./patient-detail.module.scss";
import { ContentWrapper } from "@core/components/content-wrapper/content-wrapper";
import { Title } from "@core/components/typography/title/title";
import { SubmitButton, ResetButton, FormInput, FormTextArea } from "@core/components";
import { usePatientDetail } from "@feats/patients/pages/patient-detail/use-patient-detail";
import { Form, Formik } from "formik";
import { LoadingView } from "@core/components/loading/loading-view/loading-view";
import { useRouter } from "next/router";
import Head from "next/head";

export type PatientDetailProps = {}

export const PatientDetail: React.FC<PatientDetailProps> = () => {
    const { query } = useRouter()
    const {formik} = usePatientDetail(query.id as string)

    return <Layout className={ styles.page }>
        <Head>
            <title>Редактирование пациента | Lumi</title>
        </Head>
        {
            formik
                ? <Formik { ...formik }>
                    <Form>
                        <ContentWrapper>
                            <Title>Редактирование пациента</Title>
                            <div className={ styles.grid }>
                                <FormInput
                                    label="Фамилия"
                                    name="lastName"
                                    placeholder="Введите свою фамилию"
                                    fullWidth/>
                                <FormInput
                                    label="Имя"
                                    name="name"
                                    placeholder="Введите своё имя"
                                    fullWidth/>
                                <FormInput
                                    label="Отчество"
                                    name="patronymic"
                                    placeholder="Введите своё отчество"
                                    fullWidth/>
                                <FormInput
                                    label="Дата рождения"
                                    name="birthday"
                                    placeholder="Введите свою дату рождения"
                                    type="date"
                                    fullWidth/>
                            </div>
                            <div className={ styles.inputs }>
                                <FormTextArea
                                    name="consultations"
                                    label="Консультации"
                                    placeholder="Введите консультации пациента"/>
                                <FormTextArea
                                    name="diagnosis"
                                    label="Диагнозы"
                                    placeholder="Введите диагноз пациента"/>
                                <FormTextArea
                                    name="operations"
                                    label="Операции"
                                    placeholder="Введите операции пациента"/>
                            </div>
                            <div className={ styles.actions }>
                                <SubmitButton>Сохранить</SubmitButton>
                                <ResetButton>Сбросить</ResetButton>
                            </div>
                        </ContentWrapper>
                    </Form>
                </Formik>
                : <LoadingView/>
        }

    </Layout>
}