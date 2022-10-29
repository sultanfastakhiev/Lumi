import { GetServerSideProps } from "next";
import { fetchPatients } from "@api/fetch-patients";
import { dehydrate } from "@tanstack/query-core";
import { QueryClient } from "@tanstack/react-query";
import Cookies from "@core/services/cookies";
import { prefetchUser } from "@feats/auth/query/prefetch-user";
import { loginRedirect } from "@core/utils";

export const getServerSideProps: GetServerSideProps = async (context) => {
    Cookies.apply(context);

    if (!Cookies.token) return loginRedirect

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(["patients"], fetchPatients);
    await prefetchUser(queryClient);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        }
    }
}