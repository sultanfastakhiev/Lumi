import React from "react";
import styles from "../auth.module.scss";
import { Form, Formik } from "formik";
import { SubmitButton, FormInput, FormPasswordInput } from "@core/components";
import Link  from "next/link";
import { useSignup } from "@feats/auth/pages/signup/use-signup";
import Head from "next/head";

export const SignupPage: React.FC = () => {
    const { formik } = useSignup()
    
    return <div className={ styles.page }>
        <Head>
            <title>Регистрация | Lumi</title>
        </Head>
        <div className={ styles.content }>
            <Formik { ...formik }>
                <Form className={ styles.loginForm }>
                    <h1 className={ styles.formTitle }>Регистрация</h1>
                    <FormInput
                        label="Username"
                        name="username"
                        placeholder="Введите свой username"
                        fullWidth/>
                    <FormPasswordInput
                        label="Пароль"
                        name="password"
                        placeholder="••••••••"
                        fullWidth/>
                    <FormPasswordInput
                        label="Подтвердите пароль"
                        name="passwordConfirm"
                        placeholder="••••••••"
                        fullWidth/>
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
                    <SubmitButton fullWidth>Создать аккаунт</SubmitButton>
                    <span className={styles.actions}>
                        Есть аккаунт? <Link href="/login">Войти</Link>
                    </span>
                </Form>
            </Formik>
        </div>
    </div>
}