import { createFormik } from "@core/utils/ui/create-formik";
import * as yup from "yup";

export function usePatientDetail() {
    return {
        formik: createFormik({
            initialValues: {
                lastName: "",
                name: "",
                patronymic: "",
                birthday: "",
                consultations: "",
                diagnosis: "",
                operations: "",
            },
            onSubmit: async (values) => {
                console.log(values)
            },
            validationSchema: yup.object({
                lastName: yup.string().required("Это поле обязательно"),
                name: yup.string().required("Это поле обязательно"),
                patronymic: yup.string().required("Это поле обязательно"),
                birthday: yup.string().required("Это поле обязательно"),
            })
        })
    }
}