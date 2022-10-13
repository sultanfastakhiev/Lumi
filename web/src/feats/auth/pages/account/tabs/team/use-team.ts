import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../../../../../api/fetch-users";

export function useTeam() {
    const data = useQuery(["teams"], fetchTeams, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchInterval: Infinity,
        cacheTime: Infinity,
    })

    return {
        ...data
    }
}

export async function fetchTeams() {
    const users = await Promise.all([
        fetchUsers(3),
        fetchUsers(6),
        fetchUsers(5),
    ])

    return {
        admins: users[0],
        moderators: users[1],
        translators: users[2],
    }
}