import React, { createContext, useContext, useState } from "react";
import { DropdownOption } from "react-untitled-ui/src/components/Dropdown/Dropdown";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../../../api/fetch-users";

interface IUserListContext {
    search: string;
    setSearch: (search: string) => void;
    role: DropdownOption;
    setRole: (role: DropdownOption) => void;
    status: DropdownOption;
    setStatus: (status: DropdownOption) => void;
}

export const UserListContext = createContext<IUserListContext | null>(null)

export function useUsersList() {
    const [search, setSearch] = useState("");
    const [role, setRole] = useState<DropdownOption>({label: "All", value: ""});
    const [status, setStatus] = useState<DropdownOption>({label: "All", value: ""});
    
    const query = useQuery(["users"], () => fetchUsers(100), {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchInterval: Infinity,
        cacheTime: Infinity,
    })

    return {
        query,
        context: {
            search,
            setSearch,
            role,
            setRole,
            status,
            setStatus,
        } as IUserListContext
    }
}

export function useUsersListFilters() {
    const context = useContext(UserListContext) as IUserListContext;
    
    return {
        search: context.search,
        role: context.role,
        status: context.status,
        handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => context.setSearch(e.target.value),
        handleRoleChange: (role: DropdownOption) => context.setRole(role),
        handleStatusChange: (status: DropdownOption) => context.setStatus(status),
    }
}