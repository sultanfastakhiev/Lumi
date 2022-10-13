import { LoginArgs } from "@feats/auth/redux/auth/auth-actions";
import { LoginStatus } from "@feats/auth/redux/auth/auth-state";
import { wait } from "@core/utils/wait";
import LocalStorage from "@core/services/local-storage";


export default class AuthService {
    
    static async login(arg: LoginArgs): Promise<LoginStatus> {
        await wait(1500)
        if (arg.email === "admin@gmail.com" && arg.password === "12345") {
            return {
                user: {
                    id: "1",
                    email: "admin@gmail.com",
                    firstName: "Roman",
                    lastName: "Shchurov",
                    bio: "Hi! I'm example account",
                    username: "163onmyneck",
                    permissions: ["dashboard"],
                    role: "admin",
                    lastActiveAt: new Date(),
                    createdAt: new Date(),
                },
                tokens: {
                    access: "123.123.123",
                    refresh: "123.456.789"
                }
            }
        }
        return "invalid-email"
    }
    
    static isSignedIn(): boolean {
        return !!LocalStorage.user && !!LocalStorage.tokens
    }
    
    static logout() {
        LocalStorage.user = undefined
        LocalStorage.tokens = undefined
    }
}