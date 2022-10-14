import React from "react";
import styles from "../auth.module.scss"
import { FormInput } from "@core/components/inputs/form/form-input";
import { useLogin } from "@feats/auth/pages/login/use-login";
import { Form, Formik } from "formik";
import { FormPasswordInput } from "@core/components/inputs/form/form-password-input";
import { SubmitButton } from "@core/components/buttons/form/submit-button";
import { Link } from "react-router-dom";

export const LoginPage: React.FC = () => {
    const {formik} = useLogin()

    return <div className={ styles.page }>
        <div className={ styles.content }>
            <Formik { ...formik }>
                <Form className={ styles.loginForm }>
                    <h1 className={ styles.formTitle }>Вход в аккаунт</h1>
                    <span className={ styles.formSubtitle }>
                        С возвращением! Введите свои данные.
                    </span>
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
                    <SubmitButton fullWidth>Войти</SubmitButton>
                    <span className={styles.actions}>
                        Нет аккаунта? <Link to="/signup">Создать</Link>
                    </span>
                </Form>
            </Formik>
        </div>
    </div>
}

