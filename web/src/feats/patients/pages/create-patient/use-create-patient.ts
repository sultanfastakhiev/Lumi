import { createFormik } from "@core/utils";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { createPatient } from "@api";
import { queryClient } from "@core/utils/react-query";
import LocalStorage from "@core/services/local-storage";
import { useRouter } from "next/router";

export function useCreatePatient() {
    const router = useRouter();
    
    const {mutate} = useMutation(createPatient, {
        onSettled: () => {
            queryClient.invalidateQueries(['patients']);
            router.replace("/apps/patients");
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