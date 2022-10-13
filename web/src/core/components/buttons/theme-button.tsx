import React from "react";
import { Moon, Sun } from "react-feather";
import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";

type Props = ButtonProps

export const ThemeButton: React.FC<Props> = (props) => {
    const {colorMode, toggleColorMode} = useColorMode()

    return <Button variant="ghost" onClick={ toggleColorMode } {...props}>
        {
            colorMode === "light"
                ? <Moon color="var(--hint)"/>
                : <Sun color="var(--hint)"/>
        }
    </Button>
}