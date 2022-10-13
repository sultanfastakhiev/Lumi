import { SidebarConfig } from "@core/types/layout";
import { Dribbble, User, Users } from "react-feather";
import React from "react";
import { v4 } from "uuid";

export const sidebarConfig: SidebarConfig = {
    items: [
        {
            type: "page",
            icon: <User/>,
            text: "Account settings",
            url: "/apps/auth/account",
            key: v4(),
        },
        {
            type: "page",
            icon: <Users/>,
            text: "User list",
            url: "/apps/users/list",
            key: v4(),
        },
        {
            type: "page",
            icon: <Dribbble/>,
            text: "Components",
            url: "/apps/components",
            key: v4(),
        },
    ],
}