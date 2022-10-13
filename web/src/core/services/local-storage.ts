import { Tokens, User } from "@feats/auth/entities";

export default class LocalStorage {
    private static readonly keys = {
        // UI
        isSidebarOpened: "ui__is-sidebar-opened",

        // Auth
        user: "user",
        tokens: "tokens",
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

    static get tokens(): Tokens | undefined {
        const raw = localStorage.getItem(LocalStorage.keys.tokens)
        return raw && JSON.parse(raw)
    }

    static set tokens(tokens: Tokens | undefined) {
        localStorage.setItem(LocalStorage.keys.tokens, tokens ? JSON.stringify(tokens) : "");
    }
}