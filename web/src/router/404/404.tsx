import React, { useCallback } from "react";
import styles from "./404.module.scss"
import { useNavigate } from "react-router-dom";
import { Button } from "react-untitled-ui";
import { ArrowLeft } from "react-feather";
import { useMediaQuery } from "react-responsive";

export const Page404: React.FC = () => {
    const navigate = useNavigate()
    const isMobile = useMediaQuery({query: "(max-width: 575px)"})

    const handleHomeClick = useCallback(() => navigate("/"), [navigate]);
    const handleBackClick = useCallback(() => navigate(-1), [navigate]);

    const size = isMobile ? "xl" : "2xl"

    return <div className={ styles.page404 }>
        <div className={ styles.subhead }>404 ошибка</div>
        <h1>Мы не можем найи эту страницу</h1>
        <div className={ styles.support }>Такой страницы не существует</div>
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