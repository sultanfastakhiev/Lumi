import React from "react";
import { PreviewHeader } from "@core/components/sections/headers/preview/preview";
import { Layout } from "@core/components/layout/layout";
import {
    ComponentsContainer, ComponentsParagraph,
    ComponentsShowcase,
    ComponentsTitle
} from "@feats/library/components/components-container/components-container";
import { Dropdown } from "react-untitled-ui";
import { User } from "react-feather";

export type DropdownProps = {}

export const Dropdowns: React.FC<DropdownProps> = () => {
    return <Layout>
        <PreviewHeader
            badge="Components"
            title="Dropdown components"
            subtitle="Dropdowns are used to group together actions in a subview. They’re useful for hiding menus or when you have multiple actions that cannot be separate buttons."/>

        <ComponentsContainer>
            <ComponentsTitle>
                Variants
                <ComponentsParagraph>
                    Customize options to your needs. You can add <code>supportText</code>, or <code>icon</code>.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <Dropdown { ...props } />
                <Dropdown { ...props } leadingIcon={ User }/>
                <Dropdown { ...propsWithSupportText } leadingIcon={ User }/>
                <Dropdown { ...propsWithIcon }/>
            </ComponentsShowcase>
        </ComponentsContainer>
    </Layout>
}

const props = {
    placeholder: "Select team member",
    options: [
        {label: "Olivia Ar", value: "olivia-ar"},
        {label: "John Doe", value: "john-doe"},
        {label: "Tom Ernie", value: "tom-ernie"},
        {label: "Adam Roe", value: "adam-roe"},
        {label: "Bella Roe", value: "bella-roe"},
    ]
}

const propsWithSupportText = {
    ...props,
    options: [
        {label: "Olivia Ar", value: "olivia-wilde", supportText: "@olivia-ar"},
        {label: "John Doe", value: "john-doe", supportText: "@john-doe"},
        {label: "Tom Ernie", value: "tom-ernie", supportText: "@tom-ernie"},
        {label: "Adam Roe", value: "adam-roe", supportText: "@adam-roe"},
        {label: "Bella Roe", value: "bella-roe", supportText: "@bella-roe"},
    ]
}

const propsWithIcon = {
    placeholder: "Select country",
    options: [
        {
            label: "England",
            value: "en",
            icon: <img src="https://cdn-icons-png.flaticon.com/512/197/197374.png" alt=""/>
        },
        {
            label: "Italy",
            value: "it",
            icon: <img src="https://cdn-icons-png.flaticon.com/512/197/197560.png" alt=""/>
        },
        {
            label: "Japan",
            value: "jp",
            icon: <img src="https://cdn-icons-png.flaticon.com/512/197/197604.png" alt=""/>
        },
        {
            label: "United states",
            value: "us",
            icon: <img src="https://cdn-icons-png.flaticon.com/512/197/197484.png" alt=""/>
        },
    ]
}

