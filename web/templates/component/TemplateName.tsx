import React from "react";
import styles from './TemplateName.module.scss';

export type Props = {}

const TemplateName: React.FC<Props> = () => {
    return <div className={styles.TemplateName} data-testid="TemplateName">
    </div>
}

export default TemplateName;