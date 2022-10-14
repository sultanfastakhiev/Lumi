import { createFormik } from "@core/utils/ui/create-formik";
import * as yup from "yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getPatient } from "@api/get-patient";
import { queryClient } from "../../../../index";
import { updatePatient } from "@api/update-patient";
import { useNavigate } from "react-router-dom";

export function usePatientDetail(id: string) {
    const navigate = useNavigate()

    const {data, isLoading} = useQuery(
        ['patient', id],
        () => getPatient(id),
    );

    const {mutate} = useMutation(updatePatient, {
        onSettled: () => {
            queryClient.invalidateQueries(['patient', id]);
        },
        onSuccess: () => {
            navigate("/apps/patients")
        }
    });

    return {
        id,
        data,
        isLoading,
        formik: data
            ? createFormik({
                initialValues: {
                    lastName: data.lastName,
                    name: data.name,
                    patronymic: data.patronymic,
                    birthday: data.birthday.toISOString().substring(0, 10),
                    consultations: data.consultations,
                    diagnosis: data.diagnosis,
                    operations: data.operations,
                },
                onSubmit: async (values) => {
                    await mutate({
                        ...data,
                        ...values,
                    });
                },
                validationSchema: yup.object({
                    lastName: yup.string().required("Это поле обязательно"),
                    name: yup.string().required("Это поле обязательно"),
                    patronymic: yup.string().required("Это поле обязательно"),
                    birthday: yup.string().required("Это поле обязательно"),
                })
            })
            : null
    }
}