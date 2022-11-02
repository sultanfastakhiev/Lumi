import { createFormik, useErrorToast } from "@core/utils";
import * as yup from "yup"
import { useAppDispatch } from "@redux/hooks";
import { login } from "@feats/auth/redux/auth/auth-actions";
import { selectAuthType } from "@feats/auth/redux/auth/auth-selectors";
import { store } from "@redux/store";
import { useRouter } from "next/router";
import { getHomeRoute } from "@router/get-home-route";

export function useLogin() {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const showError = useErrorToast()

    return {
        formik: createFormik({
            initialValues: {
                username: "",
                password: ""
            },
            onSubmit: async (values) => {
                await dispatch(login(values));

                const authType = selectAuthType(store.getState())
                
                if (authType === "invalid") {
                    showError("Неверный username или пароль")
                } else if (authType === "not-authorized") {
                    showError("Пользователь не авторизован")
                } else {
                    return router.replace(getHomeRoute())
                }
            },
            validationSchema: yup.object({
                username: yup.string().required("Это поле обязательно"),
                password: yup.string().required("Это поле обязательно"),
            })
        }),
    }
}