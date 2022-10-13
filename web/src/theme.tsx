import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
    styles: {
        global: (props: any) => ({
            body: {
                bg: mode("white", "#171822")(props),
            }
        }),
    },
    colors: {
        blue: {
            600: "#175FFB"
        }
    },
    components: {
        Button: {
            variants: {
                primary: {
                    bg: "var(--contrast)",
                    color: "white",
                    _hover: {
                        bg: "var(--contrastHover)",
                        _disabled: {
                            bg: "var(--contrast)",
                        }
                    },
                }
            }
        }
    }
})