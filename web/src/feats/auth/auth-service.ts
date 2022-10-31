import { LoginArgs, SignupArgs } from "@feats/auth/redux/auth/auth-actions";
import { AuthenticationStatus } from "@feats/auth/redux/auth/auth-state";
import { fetchMe } from "@api/fetch-me";
import { authorize } from "@api";
import { createUser } from "@api/create–user";
import Cookies from "@core/services/cookies";

export default class AuthService {
    static async login(arg: LoginArgs): Promise<AuthenticationStatus> {
        const token = await authorize(arg.username, arg.password);
        if (token) {
            Cookies.token = token;
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
        return !!Cookies.token
    }

    static logout() {
        Cookies.token = undefined
    }
}