import { useLocation } from "react-router";

/**
 * React hook that read location and return true if it includes {@link name} in it
 */
export function useActiveTab(name: string): boolean {
    const {pathname} = useLocation()
    return pathname.includes(name)
}