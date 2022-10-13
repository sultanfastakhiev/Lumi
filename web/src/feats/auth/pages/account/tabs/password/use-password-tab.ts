import { createFormik } from "@core/utils/ui/create-formik";
import * as yup from "yup";
import { passwordValidator } from "@core/utils/validations";

export function usePasswordTab() {
    return {
        formik: createFormik({
            onSubmit: async values => {
                console.log(values)
            },
            validationSchema: yup.object().shape({
                currentPassword: yup.string().trim()
                    .required("This field is required")
                    .when("currentPassword", whenPasswordValidator)
                    .when("password", whenPasswordValidator)
                    .when("confirmPassword", whenPasswordValidator),
                password: yup.string().trim()
                    .required("This field is required")
                    .when("currentPassword", whenPasswordValidator)
                    .when("password", whenPasswordValidator)
                    .when("confirmPassword", whenPasswordValidator)
                    .when("password", {
                        is: (value: string) => value?.length > 0,
                        then: rule => rule.notOneOf([
                            yup.ref("currentPassword")], "Password must be different than current password"
                        ),
                    }),
                confirmPassword: yup.string().trim()
                    .required("This field is required")
                    .when("currentPassword", whenPasswordValidator)
                    .when("password", whenPasswordValidator)
                    .when("confirmPassword", whenPasswordValidator)
                    .when("confirmPassword", {
                        is: (value: string) => value?.length > 0,
                        then: rule => rule.oneOf(
                            [yup.ref("password"), null],
                            "Passwords don't match",
                        ),
                    }),
            }, [
                ["currentPassword", "currentPassword"],
                ["currentPassword", "password"],
                ["currentPassword", "confirmPassword"],
                ["password", "currentPassword"],
                ["password", "password"],
                ["password", "confirmPassword"],
                ["confirmPassword", "currentPassword"],
                ["confirmPassword", "password"],
                ["confirmPassword", "confirmPassword"],
            ]),
            initialValues: {
                currentPassword: "",
                password: "",
                confirmPassword: "",
            }
        })
    }
}

const whenPasswordValidator = {
    is: (value: string) => value?.length > 0,
    then: () => passwordValidator,
}