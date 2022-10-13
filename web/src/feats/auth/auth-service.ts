import { LoginArgs } from "@feats/auth/redux/auth/auth-actions";
import { LoginStatus } from "@feats/auth/redux/auth/auth-state";
import LocalStorage from "@core/services/local-storage";
import { fetchMe } from "@api/fetch-me";
import { authorize } from "@api/authorize";

export default class AuthService {
    static async login(arg: LoginArgs): Promise<LoginStatus> {
        const token = await authorize(arg.username, arg.password);
        if (token) {
            LocalStorage.token = token;
            const user = (await fetchMe())!
            return {user, token}
        }
        return "invalid-credentials"
    }

    static isSignedIn(): boolean {
        return !!LocalStorage.user && !!LocalStorage.token
    }

    static logout() {
        LocalStorage.user = undefined
        LocalStorage.token = undefined
    }
}