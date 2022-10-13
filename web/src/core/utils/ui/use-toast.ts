import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

export function useErrorToast() {
    const toast = useToast()

    return useCallback((message: string) => {
        toast({
            status: "error",
            position: "bottom-right",
            title: message
        })
    }, [toast])
}