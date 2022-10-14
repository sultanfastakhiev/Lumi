import React, { useEffect, useState } from "react";
import styles from "./picked-image.module.scss";

export type PickedImageProps = {
    file: File;
    onClick?: () => any;
}

export const PickedImage: React.FC<PickedImageProps> = React.memo((props) => {
    const [src, setSrc] = useState<string | null>(null)

    useEffect(() => {
        const reader = new FileReader()
        reader.readAsDataURL(props.file)
        reader.onload = function () {
            setSrc(this.result as string)
        }
    }, [props.file])

    if (!src) return <React.Fragment/>

    return <img onClick={ props.onClick } className={ styles.image } alt="" src={ src }/>
})