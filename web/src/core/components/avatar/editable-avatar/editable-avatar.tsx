import React, { useCallback, useEffect, useState } from "react";
import styles from "./editable-avatar.module.scss";
import {
    Avatar,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import Cropper, { Area, Point } from "react-easy-crop";
import { useErrorToast } from "@core/utils/ui/use-toast";

type Props = {
    onChange?: (file: File, crop: Area) => any;
    boxSize?: number;
    src?: string;
    modalTitle?: string;
    aspectRatio?: number;
}

export const EditableAvatar: React.FC<Props> = React.memo((props) => {
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [file, setFile] = useState<File | null>(null)
    const [crop, setCrop] = useState<Area>({x: 0, y: 0, width: -1, height: -1})
    const toast = useErrorToast()

    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return
        
        if (file.type !== "image/png" && file.type !== "image/jpeg" && file.type !== "image/jpg") {   
            toast("Please select png, jpg or jpeg")
            return
        }
        
        setFile(file)
        setShowEditPopup(true)
    }, [setShowEditPopup, toast])

    const handleSubmit = () => {
        if (!file) return;
        if (props.onChange) props.onChange(file, crop)
        setShowEditPopup(false)
        setFile(null)
        setCrop({x: 0, y: 0, width: -1, height: -1})
    }

    return <div className={ styles.editableAvatar }>
        <Avatar boxSize={ props.boxSize ?? 14 } src={ props.src }/>
        <div className={ styles.buttonGroup }>
            <Button size="sm">Change</Button>
            <input type="file" onChange={ handleFileChange }/>
        </div>
        <Modal isOpen={ showEditPopup } onClose={ () => setShowEditPopup(false) }>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>{ props.modalTitle ?? "Change avatar" }</ModalHeader>
                <ModalCloseButton/>
                <ModalBody pb={ 2 }>
                    { file && <Crop image={ file } onCropComplete={ setCrop } aspectRatio={ props.aspectRatio }/> }
                </ModalBody>
                <ModalFooter>
                    <Button variant="primary" onClick={ handleSubmit }>Save</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </div>
})

/// function that convert image as file to base64 string
export const convertImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result as string);
        }
        reader.onerror = (error) => {
            reject(error);
        }
    })
}

// function that get image width and height from base64 string
export const getImageSize = (base64: string): Promise<{ width: number, height: number }> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = base64;
        img.onload = () => {
            resolve({width: img.width, height: img.height});
        }
        img.onerror = (error) => {
            reject(error);
        }
    })
}


type CropProps = {
    image: File;
    onCropComplete: (settings: Area) => any;
    aspectRatio?: number;
}

const Crop: React.FC<CropProps> = (props) => {
    const [image, setImage] = useState<string | null>(null);
    const [crop, setCrop] = useState<Point>({x: 0, y: 0})
    const [zoom, setZoom] = useState(1)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        convertImageToBase64(props.image).then(async base64 => {
            let {width, height} = await getImageSize(base64)
            const aspectRation = width / height
            width -= 108
            if (width > 448) width = 448
            if (width > window.innerWidth - 40) width = window.innerWidth - 40
            height = width / aspectRation
            if (height > 450) height = 450
            setHeight(height)
            setImage(base64)
        })
    }, [props.image])

    if (!image) return <React.Fragment/>

    return <div className={ styles.cropContainer } style={ {minHeight: `${ height }px`} }>
        <Cropper
            style={ {
                containerStyle: {
                    background: "white"
                }
            } }
            objectFit="horizontal-cover"
            cropShape="round"
            image={ image }
            crop={ crop }
            zoom={ zoom }
            aspect={ props.aspectRatio ?? 1 }
            onCropChange={ setCrop }
            onCropComplete={ props.onCropComplete }
            onZoomChange={ setZoom }
        />
    </div>
}