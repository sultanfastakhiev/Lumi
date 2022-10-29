import { User } from "@feats/auth/entities";
import { isServer } from "@core/utils";

export default class LocalStorage {
    private static readonly keys = {
        // UI
        isSidebarOpened: "ui__is-sidebar-opened",

        // Auth
        user: "user",
        token: "token",
        usernameAndPassword: "usernameAndPassword",
    }

    static get isSidebarOpened(): boolean {
        if (isServer()) return true;
        return localStorage.getItem(LocalStorage.keys.isSidebarOpened) === "true";
    }

    static set isSidebarOpened(value) {
        if (isServer()) return;
        localStorage.setItem(LocalStorage.keys.isSidebarOpened, String(value));
    }

    static get user(): User | undefined {
        if (isServer()) return undefined;
        const raw = localStorage.getItem(LocalStorage.keys.user)
        return raw && JSON.parse(raw)
    }

    static set user(user: User | undefined) {
        if (isServer()) return;
        localStorage.setItem(LocalStorage.keys.user, user ? JSON.stringify(user) : "");
    }

    static get token(): string | undefined {
        if (isServer()) return undefined;
        return localStorage.getItem(LocalStorage.keys.token) ?? undefined
    }

    static set token(token: string | undefined) {
        if (isServer()) return;
        if (token) {
            localStorage.setItem(LocalStorage.keys.token, token ?? "");
        } else {
            localStorage.removeItem(LocalStorage.keys.token);
        }
    }
}