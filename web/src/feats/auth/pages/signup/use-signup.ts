import { createFormik } from "@core/utils/ui/create-formik";
import * as yup from "yup";
import { checkUsernameUniqueness } from "@api/check-username-uniqueness";
import { createUser } from "@feats/auth/redux/auth/auth-actions";
import { selectAuthType } from "@feats/auth/redux/auth/auth-selectors";
import { store } from "@redux/store";
import { getHomeRoute } from "@router/routes";
import { useAppDispatch } from "@redux/hooks";
import { useErrorToast } from "@core/utils/ui/use-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
    const dispatch = useAppDispatch()
    const showError = useErrorToast()
    const navigate = useNavigate()
    
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

                await dispatch(createUser(values));

                const authType = selectAuthType(store.getState())

                if (authType === "invalid") {
                    showError("Неверный username или пароль")
                } else if (authType === "not-authorized") {
                    showError("Пользователь не авторизован")
                } else {
                    navigate(getHomeRoute(), {replace: true})
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
