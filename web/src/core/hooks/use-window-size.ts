import { useEffect, useState } from "react";
import { Breakpoint, getScreenSize } from "@core/utils/ui/breakpoint";

export function useWindowSize(): Breakpoint {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState<Breakpoint>(getScreenSize());

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize(getScreenSize());
        }

        // Add event listener
        window.addEventListener("resize", handleResize, {passive: true});
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
}