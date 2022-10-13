import { LoginArgs, SignupArgs } from "@feats/auth/redux/auth/auth-actions";
import { AuthenticationStatus } from "@feats/auth/redux/auth/auth-state";
import LocalStorage from "@core/services/local-storage";
import { fetchMe } from "@api/fetch-me";
import { authorize } from "@api/authorize";
import { createUser } from "@api/create–user";

export default class AuthService {
    static async login(arg: LoginArgs): Promise<AuthenticationStatus> {
        const token = await authorize(arg.username, arg.password);
        if (token) {
            LocalStorage.token = token;
            const user = (await fetchMe())!
            return {user, token}
        }
        return "invalid-credentials"
    }
    
    static async signup(args: SignupArgs): Promise<AuthenticationStatus> {
        const error = await createUser(args);
        if (error) return "server-error";
        return this.login(args);
    }

    static isSignedIn(): boolean {
        return !!LocalStorage.user && !!LocalStorage.token
    }

    static logout() {
        LocalStorage.user = undefined
        LocalStorage.token = undefined
    }
}