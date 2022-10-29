import React, { CSSProperties } from "react";
import styles from "./logo.module.scss";
import classNames from "classnames";
import Image from "next/image";

export type LogoProps = {
    size?: CSSProperties["width"] | CSSProperties["height"];
    text?: boolean;
    className?: string;
}

export const Logo: React.FC<LogoProps> = React.memo((props) => {
    const {size = 32} = props;

    return <div className={ classNames(props.className, styles.logo) } style={ {width: size, height: size} }>
        <Image width={32} height={32} src="/logo.png" alt="Logo"/>
        {
            props.text && <span className={ styles.text }>Lumi</span>
        }
    </div>
})