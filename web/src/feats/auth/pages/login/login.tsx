import React from "react";
import styles from "./login.module.scss"
import { FormInput } from "@core/components/inputs/form/form-input";
import { useLogin } from "@feats/auth/pages/login/use-login";
import { Form, Formik } from "formik";
import { FormPasswordInput } from "@core/components/inputs/form/form-password-input";
import { Logo } from "@core/components/logo/logo";
import { appConfig } from "@config/app";
import { Checkbox } from "react-untitled-ui";
import { SubmitButton } from "@core/components/buttons/form/submit-button";

export const LoginPage: React.FC = () => {
    const {formik, rememberMe, handleRememberMeChange} = useLogin()

    return <div className={ styles.page }>
        <div className={ styles.left }>
            <Logo text/>
            <Formik { ...formik }>
                <Form className={ styles.loginForm }>
                    <img src="/white-logo.png" alt="" className={styles.logo}/>
                    <h1 className={ styles.formTitle }>Sign in</h1>
                    <span className={ styles.formSubtitle }>
                        Welcome back! Please enter your details
                    </span>
                    <FormInput
                        label="Email"
                        name="email"
                        placeholder="Enter your email"
                        fullWidth/>
                    <FormPasswordInput
                        label="Password"
                        name="password"
                        placeholder="Enter your password"
                        fullWidth/>
                    <Checkbox
                        className={ styles.checkbox }
                        label="Remember me"
                        id="remember-me"
                        value={ rememberMe }
                        onChange={ handleRememberMeChange }/>
                    <SubmitButton fullWidth>Login</SubmitButton>
                </Form>
            </Formik>
            <span className={ styles.copyright }>
                { appConfig.copyright }
            </span>
        </div>
        <div className={ styles.right }>
            <img src="/big-logo.png" alt=""/>
        </div>
    </div>
}

