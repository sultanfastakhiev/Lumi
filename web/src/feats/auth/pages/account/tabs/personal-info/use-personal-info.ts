import { createFormik } from "@core/utils/ui/create-formik";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectUser } from "@feats/auth/redux/auth/auth-selectors";
import { updateUser } from "@feats/auth/redux/auth/auth-actions";
import { countryByValue } from "@config/countries";
import { timezoneByValue } from "@config/timezones";
import * as yup from "yup";

export function usePersonalInfo() {
    const user = useAppSelector(selectUser)
    const dispatch = useAppDispatch()

    return {
        user,
        formik: createFormik({
            onSubmit: async values => {
                await dispatch(updateUser({
                    ...values,
                    country: values.country?.value,
                    timezone: values.timezone?.value,
                }))
            },
            initialValues: {
                firstName: user?.firstName ?? "",
                lastName: user?.lastName ?? "",
                email: user!.email,
                username: user?.username ?? "",
                profileImage: user?.profileImage ?? "",
                country: countryByValue(user?.country),
                timezone: timezoneByValue(user?.timezone),
                bio: user?.bio ?? "",
            },
            validationSchema: yup.object().shape({
                firstName: yup.string().trim().required("First name is required"),
                lastName: yup.string().trim().required("Last name is required"),
                email: yup.string().trim().email("Email is invalid").required("Email is required"),
            }),
        })
    }
}