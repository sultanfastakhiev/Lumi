import React from "react";
import styles from "./delete-edit.module.scss"
import { Edit2, Trash2 } from "react-feather";

export type DeleteEditTableActionProps = {
    onDelete: () => any,
    onEdit: () => any,
}

export const DeleteEditTableAction: React.FC<DeleteEditTableActionProps> = (props) => {
    return <div className={ styles.deleteEdit }>
        <Trash2 onClick={ props.onDelete }/>
        <Edit2 onClick={ props.onEdit }/>
    </div>
}