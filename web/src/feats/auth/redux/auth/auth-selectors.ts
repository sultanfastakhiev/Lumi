import { RootState } from "@redux/store";
import { isAuthorizedAuthState } from "@feats/auth/redux/auth/auth-state";
import { Permission, User } from "@feats/auth/entities";

export const selectUserPermissions = ({ auth }: RootState): Permission[] => {
    if (isAuthorizedAuthState(auth)) {
        return auth.user.permissions
    }
    return []
}

export const selectUser = ({ auth }: RootState): User | null => {
    if (isAuthorizedAuthState(auth)) {
        return auth.user
    }
    return null
}

export const selectAuthType = ({ auth }: RootState) => auth.type

export const selectIsAuthorized = ({ auth }: RootState) => auth.type === "authorized"