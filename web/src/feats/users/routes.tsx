import { UsersList } from "./pages/users-list/users-list";
import { Route } from "@router/router";

export const usersRoutes: Route[] = [
    {
        path: "/apps/users/list",
        page: <UsersList/>,
        authentication: true,
    }
]