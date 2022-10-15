import React from "react";
import styles from "./create-patient.module.scss";
import { Layout } from "@core/components/layout/layout";
import { ContentWrapper } from "@core/components/content-wrapper/content-wrapper";
import { Title } from "@core/components/typography/title/title";
import { useCreatePatient } from "@feats/patients/pages/create-patient/use-create-patient";
import { Form, Formik } from "formik";
import { FormInput } from "@core/components/inputs/form/form-input";
import { SubmitButton } from "@core/components/buttons/form/submit-button";
import { Helmet } from "react-helmet";

export type CreatePatientProps = {}

export const CreatePatient: React.FC<CreatePatientProps> = () => {
    const {formik} = useCreatePatient()

    return <Layout className={ styles.page }>
        <Helmet>
            <title>Создать пациента | Lumi</title>
        </Helmet>
        <Formik { ...formik }>
            <Form>
                <ContentWrapper>
                    <Title>Создать пациента</Title>
                    <div className={styles.grid}>
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
                    <SubmitButton>Создать пациента</SubmitButton>
                </ContentWrapper>
            </Form>
        </Formik>
    </Layout>
}