import { createFormik } from "@core/utils/ui/create-formik";
import * as yup from "yup"
import { useAppDispatch } from "@redux/hooks";
import { login } from "@feats/auth/redux/auth/auth-actions";
import { selectAuthType } from "@feats/auth/redux/auth/auth-selectors";
import { store } from "@redux/store";
import { useNavigate } from "react-router-dom";
import { useErrorToast } from "@core/utils/ui/use-toast";
import { getHomeRoute } from "router/routes";
import { useState } from "react";

export function useLogin() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const showError = useErrorToast()
    const [rememberMe, setRememberMe] = useState(false)

    return {
        rememberMe,
        handleRememberMeChange: setRememberMe,
        formik: createFormik({
            initialValues: {
                email: "",
                password: ""
            },
            onSubmit: async (values) => {
                await dispatch(login(values));

                const authType = selectAuthType(store.getState())

                if (authType === "invalid") {
                    showError("Invalid email or password")
                } else if (authType === "not-authorized") {
                    showError("Invalid state")
                } else {
                    navigate(getHomeRoute(), {replace: true})
                }
            },
            validationSchema: yup.object({
                email: yup.string().email("Invalid email").required("Required"),
                password: yup.string().required("Required"),
            })
        }),
    }
}