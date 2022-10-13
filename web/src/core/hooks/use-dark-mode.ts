import { useColorMode } from "@chakra-ui/react";

/**
 * React hook that reads from ColorModeProvider context. 
 * Returns true if color mode is dark otherwise false.
 * Uses {@link useColorMode} under the hood
 */
export function useDarkMode(): boolean {
    const {colorMode} = useColorMode()
    return colorMode === "dark"
} 