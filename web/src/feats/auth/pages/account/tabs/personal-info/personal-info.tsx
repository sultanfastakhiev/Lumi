import React from "react";
import styles from "./personal-info.module.scss"
import { Avatar, Divider, FileUpload } from "react-untitled-ui";
import { Clock, Mail } from "react-feather";
import {
    Field,
    FieldLabel,
    FieldsContainer,
    PageContainer,
    Title,
    FormActions
} from "@feats/auth/pages/account/fields/fields";
import { availableCountries } from "@config/countries";
import { timezones } from "@config/timezones";
import { usePersonalInfo } from "@feats/auth/pages/account/tabs/personal-info/use-personal-info";
import { Form, Formik } from "formik";
import { FormInput } from "@core/components/inputs/form/form-input";
import { FormDropdown } from "@core/components/dropdown/form/form-dropdown";
import { FormTextArea } from "@core/components/inputs/form/form-textarea";
import MediaQuery from "react-responsive";

export type PersonalInfoProps = {}

export const PersonalInfo: React.FC<PersonalInfoProps> = () => {
    const {formik, user} = usePersonalInfo()

    return <Formik { ...formik }>
        <Form>
            <div className={ styles.personalInfo }>
                <PageContainer>
                    <Title>
                        <h5>Personal info</h5>
                        <p>Edit your photo and personal details</p>
                    </Title>
                    <Divider/>

                    {/* Name */ }
                    <MediaQuery minWidth={ 576 }>
                        <Field>
                            <FieldLabel>Name</FieldLabel>
                            <FieldsContainer>
                                <FormInput placeholder="Enter your first name" name="firstName" fullWidth/>
                                <FormInput placeholder="Enter your last name" name="lastName" fullWidth/>
                            </FieldsContainer>
                        </Field>
                    </MediaQuery>
                    <MediaQuery maxWidth={ 575 }>
                        <Field>
                            <FieldLabel>First name</FieldLabel>
                            <FieldsContainer>
                                <FormInput placeholder="Enter your first name" name="firstName" fullWidth/>
                            </FieldsContainer>
                        </Field>
                        <Divider/>
                        <Field>
                            <FieldLabel>Last name</FieldLabel>
                            <FieldsContainer>
                                <FormInput placeholder="Enter your last name" name="lastName" fullWidth/>
                            </FieldsContainer>
                        </Field>
                    </MediaQuery>
                    <Divider/>

                    {/* Email */ }
                    <Field>
                        <FieldLabel>Email</FieldLabel>
                        <FieldsContainer>
                            <FormInput
                                placeholder="Enter your email"
                                name="email"
                                type="email"
                                fullWidth
                                leadingIcon={ Mail }/>
                        </FieldsContainer>
                    </Field>
                    <Divider/>

                    {/* Username */ }
                    <Field>
                        <FieldLabel>Username</FieldLabel>
                        <FieldsContainer>
                            <FormInput
                                name="username"
                                placeholder="Enter your username"
                                fullWidth/>
                        </FieldsContainer>
                    </Field>
                    <Divider/>

                    {/* Profile image */ }
                    <Field>
                        <FieldLabel>
                            Your photo
                            <span>This will be displayed on your profile.</span>
                        </FieldLabel>
                        <FieldsContainer className={ styles.avatarField }>
                            <Avatar size="2xl" className={ styles.avatar } src={ user?.profileImage }/>
                            <FileUpload className={ styles.fileUpload }/>
                        </FieldsContainer>
                    </Field>
                    <Divider/>

                    {/* Country */ }
                    <Field>
                        <FieldLabel>Country</FieldLabel>
                        <FieldsContainer>
                            <FormDropdown
                                placeholder="Select your country"
                                options={ availableCountries }
                                fullWidth
                                name="country"/>
                        </FieldsContainer>
                    </Field>
                    <Divider/>

                    {/* Timezone */ }
                    <Field>
                        <FieldLabel>Timezone</FieldLabel>
                        <FieldsContainer>
                            <FormDropdown
                                placeholder="Select your timezone"
                                options={ timezones }
                                leadingIcon={ Clock }
                                name="timezone"
                                fullWidth/>
                        </FieldsContainer>
                    </Field>
                    <Divider/>

                    {/* Bio */ }
                    <Field>
                        <FieldLabel>
                            Bio
                            <span>Write a short introduction.</span>
                        </FieldLabel>
                        <FieldsContainer>
                            <FormTextArea
                                fullWidth
                                name="bio"
                                placeholder="Enter information about yourself"/>
                        </FieldsContainer>
                    </Field>
                    <Divider/>

                    {/* Actions */ }
                    <FormActions/>
                </PageContainer>
            </div>
        </Form>
    </Formik>
}