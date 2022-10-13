import { createFormik } from "@core/utils/ui/create-formik";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { createPatient } from "@api/create-patient";
import { queryClient } from "index";
import LocalStorage from "@core/services/local-storage";
import { useNavigate } from "react-router-dom";

export function useCreatePatient() {
    const navigate = useNavigate();
    
    const {mutate} = useMutation(createPatient, {
        onSettled: () => {
            queryClient.invalidateQueries(['patients']);
            navigate("/apps/patients");
        }
    });
    
    return {
        formik: createFormik({
            initialValues: {
                lastName: "",
                name: "",
                patronymic: "",
                birthday: "",
            },
            onSubmit: async (values) => {
                await mutate({
                    ...values,
                    doctorId: LocalStorage.user!.id,
                })
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