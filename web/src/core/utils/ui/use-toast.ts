import { useCallback } from "react";
import { toast, Slide } from "react-toastify";

export function useErrorToast() {
    return useCallback((message: string) => {
        toast.error(message, {
            position: "bottom-right",
            hideProgressBar: true,
            transition: Slide,
        })
    }, [])
}