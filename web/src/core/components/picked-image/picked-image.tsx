import React, { useEffect, useState } from "react";
import styles from "./picked-image.module.scss";

export type PickedImageProps = {
    /** The image to display */
    file: File;

    /** Callback to call when user clicks on the image */
    onClick?: () => any;
}

export const PickedImage: React.FC<PickedImageProps> = React.memo((props) => {
    const [src, setSrc] = useState<string | null>(null)

    // convert file image image to base64
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