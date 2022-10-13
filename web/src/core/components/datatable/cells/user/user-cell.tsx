import React from "react";
import { fullName, User } from "@feats/auth/entities";
import styles from "./user-cell.module.scss";
import { Avatar } from "react-untitled-ui";

export type UserCellProps = User

export const UserCell: React.FC<UserCellProps> = (user) => {
    return <div className={ styles.userCell }>
        <Avatar src={ user.profileImage } className={styles.avatar} size="sm"/>
        <div className={ styles.userInfo }>
            <span className={ styles.name }>{ fullName(user) }</span>
            <span className={ styles.email }>{ user.email }</span>
        </div>
    </div>
}