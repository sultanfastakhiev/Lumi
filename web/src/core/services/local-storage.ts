import { User } from "@feats/auth/entities";

export default class LocalStorage {
    private static readonly keys = {
        // UI
        isSidebarOpened: "ui__is-sidebar-opened",

        // Auth
        user: "user",
        token: "token",
    }

    static get isSidebarOpened(): boolean {
        return localStorage.getItem(LocalStorage.keys.isSidebarOpened) === "true";
    }

    static set isSidebarOpened(value) {
        localStorage.setItem(LocalStorage.keys.isSidebarOpened, String(value));
    }

    static get user(): User | undefined {
        const raw = localStorage.getItem(LocalStorage.keys.user)
        return raw && JSON.parse(raw)
    }

    static set user(user: User | undefined) {
        localStorage.setItem(LocalStorage.keys.user, user ? JSON.stringify(user) : "");
    }

    static get token(): string | undefined {
        return localStorage.getItem(LocalStorage.keys.token) ?? undefined
    }

    static set token(token: string | undefined) {
        if (token) {
            localStorage.setItem(LocalStorage.keys.token, token ?? "");
        } else {
            localStorage.removeItem(LocalStorage.keys.token);
        }
    }
}