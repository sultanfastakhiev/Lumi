import React from "react";
import { useAppSelector } from "@redux/hooks";
import { selectIsAuthorized } from "@feats/auth/redux/auth/auth-selectors";
import { Navigate } from "react-router";
import { getHomeRoute } from "./routes";
import { Permission } from "@feats/auth/entities";
import { useHasPermission } from "@feats/auth/permissions";

type Props = {
    children: React.ReactNode
}

export const AuthRestricted: React.FC<Props> = (props) => {
    const authorized = useAppSelector(selectIsAuthorized)
    if (authorized) return <React.Fragment>
        { props.children }
    </React.Fragment>
    return <Navigate to={ getHomeRoute() }/>
}

type PermissionRestrictedProps = Props & {
    permissions: Permission[],
}

export const PermissionRestricted: React.FC<PermissionRestrictedProps> = (props) => {
    const hasPermission = useHasPermission(props.permissions)
    console.log(props.permissions)
    if (hasPermission) return <React.Fragment>
        { props.children }
    </React.Fragment>
    return <Navigate to={ getHomeRoute() }/>
}



