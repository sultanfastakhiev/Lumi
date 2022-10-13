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
        <div className={ styles.subhead }>404 error</div>
        <h1>We can’t find that page</h1>
        <div className={ styles.support }>Sorry, the page you are looking for doesn't exist or has been moved.</div>
        <div className={ styles.buttons }>
            <Button
                fullWidth={ isMobile }
                size={ size }
                variant="secondary-gray"
                trailingIcon={ ArrowLeft }
                onClick={ handleBackClick }>
                Go back
            </Button>
            <Button 
                fullWidth={ isMobile }
                size={ size } 
                onClick={ handleHomeClick }>
                Take me home
            </Button>
        </div>
    </div>
}   