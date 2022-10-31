import { QueryClient } from "@tanstack/react-query";
import { fetchMe } from "@api/fetch-me/fetch-me";

export function prefetchUser(queryClient: QueryClient) {
    return queryClient.prefetchQuery(["me"], fetchMe);
}