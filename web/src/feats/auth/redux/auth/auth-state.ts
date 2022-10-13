import { Tokens, User } from "@feats/auth/entities";

export type AuthState = AuthorizedAuthState | NotAuthorizedUserState  | InvalidAuthState

export type AuthorizedAuthState = {
    type: "authorized",
    user: User,
}

export function isAuthorizedAuthState(t: any): t is AuthorizedAuthState {
    return t.type && t.type === "authorized"
}  

export type NotAuthorizedUserState = {
    type: "not-authorized",
}

export function isNotAuthorizedAuthState(t: any): t is NotAuthorizedUserState {
    return t.type && t.type === "not-authorized"
}

export type LoginStatus = {
    user: User,
    tokens: Tokens,
} | ErrorLoginStatus

export type ErrorLoginStatus = "invalid-email" | "server-error"

export type InvalidAuthState = {
    type: "invalid",
    error: ErrorLoginStatus,
}