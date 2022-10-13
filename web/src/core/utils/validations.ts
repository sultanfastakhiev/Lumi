import * as yup from "yup"

export const passwordValidator = yup.string().min(8, "Password must be at least 8 characters long").required("Password is required")