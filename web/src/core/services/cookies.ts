import { GetServerSidePropsContext } from "next";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

type CookiesStore = {
    [key: string]: string | null | undefined
}

export default class Cookies {
    private static readonly keys = {
        // Auth
        token: "token",
    }

    private static store: CookiesStore = {
        token: undefined,
    };

    static apply(context: GetServerSidePropsContext) {
        this.store.token = context.req.cookies[this.keys.token];
    }

    static get token() {
        return (getCookie(this.keys.token) ?? this.store.token) as string | null | undefined;
    }

    static set token(token: string | null | undefined) {
        if (!token) {
            deleteCookie(this.keys.token);
        } else {
            setCookie(this.keys.token, token, {
                path: "/",
                expires: new Date(2050, 12)
            });
        }
        this.store.token = token;
    }
}