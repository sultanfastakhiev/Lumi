import { FormikConfig } from "formik";

/**
 * Creates a Formik config object with the given initial values and validation
 * Used only for typings
 * @param config
 */
export function createFormik<FormValues>(config: FormikConfig<FormValues>): FormikConfig<FormValues> {
    return config
}