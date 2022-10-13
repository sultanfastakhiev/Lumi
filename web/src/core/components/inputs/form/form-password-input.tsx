import React, { createContext, useContext } from "react";
import { FormInput, Props as BaseProps } from "@core/components/inputs/form/form-input";
import { Eye, EyeOff, Icon } from "react-feather";
import { useBoolean } from "react-untitled-ui";
import classNames from "classnames";
import styles from "./form-input.module.scss"

type Props = BaseProps

type FormPasswordInputContextProps = {
    show: boolean,
    toggle: () => any,
}

const FormPasswordInputContext = createContext<FormPasswordInputContextProps | null>(null)

export const FormPasswordInput: React.FC<Props> = React.memo((props) => {
    const [show, {toggle}] = useBoolean()

    return <FormPasswordInputContext.Provider value={ {show, toggle} }>
        <FormInput
            { ...props }
            type={ show ? "text" : "password" }
            trailingIcon={ EyeButton }/>
    </FormPasswordInputContext.Provider>
})

export const EyeButton: Icon = React.memo((props) => {
    const context = useContext(FormPasswordInputContext)
    
    const className = classNames(props.className, styles.passwordEyeButton)

    return context!.show
        ? <EyeOff color="var(--hint)" size={ 15 } className={ className } onClick={ context!.toggle }/>
        : <Eye color="var(--hint)" size={ 15 } className={ className } onClick={ context!.toggle }/>
})