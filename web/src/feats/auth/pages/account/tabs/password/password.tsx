import React from "react";
import { usePasswordTab } from "@feats/auth/pages/account/tabs/password/use-password-tab";
import { Form, Formik } from "formik";
import {
    Field,
    FieldLabel,
    FieldsContainer,
    FormActions,
    PageContainer,
    Title
} from "@feats/auth/pages/account/fields/fields";
import { Divider } from "react-untitled-ui";
import { FormPasswordInput } from "@core/components/inputs/form/form-password-input";

export type PasswordProps = {}

export const Password: React.FC<PasswordProps> = () => {
    const {formik} = usePasswordTab()

    return <Formik { ...formik }>
        <Form>
            <PageContainer>
                <Title>
                    <h5>Password</h5>
                    <p>Please enter your current password to change it</p>
                </Title>
                <Divider/>

                {/* Current password */ }
                <Field>
                    <FieldLabel>Current password</FieldLabel>
                    <FieldsContainer>
                        <FormPasswordInput
                            placeholder="Enter your current password"
                            name="currentPassword"
                            fullWidth/>
                    </FieldsContainer>
                </Field>
                <Divider/>

                {/* New password */ }
                <Field>
                    <FieldLabel>New password</FieldLabel>
                    <FieldsContainer>
                        <FormPasswordInput
                            placeholder="Enter your new password"
                            name="password"
                            hint="Your new password must be more than 8 characters long"
                            fullWidth/>
                    </FieldsContainer>
                </Field>
                <Divider/>

                {/* Confirm new password */ }
                <Field>
                    <FieldLabel>Confirm new password</FieldLabel>
                    <FieldsContainer>
                        <FormPasswordInput
                            placeholder="Confirm your new password"
                            name="confirmPassword"
                            fullWidth/>
                    </FieldsContainer>
                </Field>
                <Divider/>

                <FormActions submitText="Update password"/>
            </PageContainer>
        </Form>
    </Formik>
}