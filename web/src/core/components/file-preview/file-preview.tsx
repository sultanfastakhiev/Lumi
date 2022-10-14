import React from "react";
import styles from "./file-preview.module.scss";
import { Check, File } from "react-feather";
import { ProgressBar } from "react-untitled-ui";

export type FilePreviewProps = {
    file: File;
    onClick?: () => any;
}

// function which takes file and return size of it as KB, MB etc.
function getFileSize(file: File): string {
    let size = file.size;
    const units = ["B", "KB", "MB", "GB", "TB"];
    let i = 0;
    while (size > 1024) {
        size /= 1024;
        i++;
    }
    return `${ Math.floor(size) } ${ units[i] }`;
}

export const FilePreview: React.FC<FilePreviewProps> = (props) => {
    return <div className={ styles.filePreview } onClick={ props.onClick }>
        <div className={ styles.icon }>
            <File/>
        </div>
        <div className={ styles.info }>
            <div className={ styles.name }>{ props.file.name }</div>
            <div className={ styles.size }>{ getFileSize(props.file) }</div>
            <ProgressBar progress={ 1 }/>
        </div>
        <div className={ styles.tick }><Check/></div>
    </div>
}