import React from "react";
import { Layout } from "@core/components/layout/layout";
import styles from "./patient-detail.module.scss";
import { ContentWrapper } from "@core/components/content-wrapper/content-wrapper";
import { Title } from "@core/components/typography/title/title";
import { FormInput } from "@core/components/inputs/form/form-input";
import { SubmitButton } from "@core/components/buttons/form/submit-button";
import { ResetButton } from "@core/components/buttons/form/reset-button";
import { usePatientDetail } from "@feats/patients/pages/patient-detail/use-patient-detail";
import { Form, Formik } from "formik";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { LoadingView } from "@core/components/loading/loading-view/loading-view";
import { FormTextArea } from "@core/components/inputs/form/form-textarea";

export type PatientDetailProps = {}

export const PatientDetail: React.FC<PatientDetailProps> = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    if (!id) {
        navigate("/apps/patients")
        return <React.Fragment/>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {formik} = usePatientDetail(id)

    return <Layout className={ styles.page }>
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