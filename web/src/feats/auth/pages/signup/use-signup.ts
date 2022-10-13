import { createFormik } from "@core/utils/ui/create-formik";
import * as yup from "yup";
import { checkUsernameUniqueness } from "@api/check-username-uniqueness";

export function useSignup() {
    return {
        formik: createFormik({
            initialValues: {
                username: "",
                password: "",
                passwordConfirm: "",
                name: "",
                lastName: "",
                patronymic: "",
                birthday: "",
            },
            onSubmit: async (values, {setFieldError}) => {
                const unique = await checkUsernameUniqueness(values.username);
                if (!unique) {
                    setFieldError("username", "Этот username уже используется другим юзером")
                    return;
                }
                
            },
            validationSchema: yup.object().shape({
                username: yup.string().required("Это поле обязательно"),
                password: yup.string().required("Это поле обязательно"),
                passwordConfirm: yup.string()
                    .required("Это поле обязательно")
                    .oneOf([yup.ref('password'), null], "Пароли не совпадают"),
                name: yup.string().required("Это поле обязательно"),
                lastName: yup.string().required("Это поле обязательно"),
                patronymic: yup.string().required("Это поле обязательно"),
                birthday: yup.string().required("Это поле обязательно"),
            }, [
                ["password", "password"],
                ["password", "passwordConfirm"],
                ["passwordConfirm", "passwordConfirm"],
                ["passwordConfirm", "password"],
            ])
        }),
    }
}
