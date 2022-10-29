import React, { useCallback } from "react";
import styles from "./404.module.scss"
import { Button } from "react-untitled-ui";
import { ArrowLeft } from "react-feather";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

export const Page404: React.FC = () => {
    const router = useRouter()
    const isMobile = useMediaQuery({query: "(max-width: 575px)"})

    const handleHomeClick = useCallback(() => router.push("/"), [router]);
    const handleBackClick = useCallback(() => router.back(), [router]);

    const size = isMobile ? "xl" : "2xl"

    return <div className={ styles.page404 }>
        <div className={ styles.subhead }>404 ошибка</div>
        <h1>Мы не можем найти эту страницу</h1>
        <div className={ styles.support }>Походу такой страницы не существует или она была перенесена</div>
        <div className={ styles.buttons }>
            <Button
                fullWidth={ isMobile }
                size={ size }
                variant="secondary-gray"
                trailingIcon={ ArrowLeft }
                onClick={ handleBackClick }>
                Вернуться назад
            </Button>
            <Button 
                fullWidth={ isMobile }
                size={ size } 
                onClick={ handleHomeClick }>
                Перейти на главную
            </Button>
        </div>
    </div>
}   