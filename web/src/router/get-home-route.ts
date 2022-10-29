import AuthService from "@feats/auth/auth-service";

export function getHomeRoute(): string {
    if (AuthService.isSignedIn()) return "/apps/patients"
    return "/login"
}