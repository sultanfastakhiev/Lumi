import { useRouter } from "next/router";
import { useEffect } from "react";
import AuthService from "@feats/auth/auth-service";

export function useAuthRestrictedRoutes() {
    const router = useRouter()
    
    useEffect(() => {
        if (!AuthService.isSignedIn() && router.pathname.includes("apps")) {
            router.replace("/login")
        }
    }, [])
}