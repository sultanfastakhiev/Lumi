import { Permission } from "@feats/auth/entities";
import { useAppSelector } from "@redux/hooks";
import { selectUserPermissions } from "@feats/auth/redux/auth/auth-selectors";

export function useHasPermission(permission: Permission | Permission[]) {
    const userPermissions = useAppSelector(selectUserPermissions)
    
    if (Array.isArray(permission)) {
        return permission.every(x => userPermissions.includes(x))
    }
    return userPermissions.includes(permission)
}