export { Fragment as default } from "react";

import { GetServerSideProps } from "next";
import Cookies from "@core/services/cookies";
import { loginRedirect, patientsRedirect } from "@core/utils";

export const getServerSideProps: GetServerSideProps = async (context) => {
    Cookies.apply(context);

    if (Cookies.token) return patientsRedirect
    return loginRedirect
} 