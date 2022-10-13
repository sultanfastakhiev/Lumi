import React from "react";
import { PreviewHeader } from "@core/components/sections/headers/preview/preview";
import { Layout } from "@core/components/layout/layout";
import {
    ComponentsContainer, ComponentsParagraph,
    ComponentsShowcase,
    ComponentsTitle
} from "@feats/library/components/components-container/components-container";
import { PhoneTextField, Textfield } from "react-untitled-ui";
import { Mail, Search } from "react-feather";

export type InputsPreviewProps = {}

export const InputsPreview: React.FC<InputsPreviewProps> = () => {
    return <Layout>
        <PreviewHeader
            badge="Components"
            title="Inputs components"
            subtitle="Input fields allow users to enter text into a UI. They typically appear in forms and dialogs. Input fields on mobiles should be at least 16px text size to avoid auto-zoom on mobile browsers."/>

        <ComponentsContainer>
            <ComponentsTitle>Variants</ComponentsTitle>
            <ComponentsShowcase>
                <Textfield placeholder="Enter your email"/>
                <Textfield leadingIcon={ Mail } placeholder="Enter your email"/>
                <Textfield trailingIcon={ Search } placeholder="Search"/>
                <PhoneTextField countries={ countries } onCountryChange={ () => "" } placeholder="Enter your number"/>
            </ComponentsShowcase>
        </ComponentsContainer>

        <ComponentsContainer>
            <ComponentsTitle>
                Labels
                <ComponentsParagraph>
                    You can add label to textfield by using <code>label</code> prop
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <Textfield placeholder="Enter your email" label="Email"/>
                <Textfield leadingIcon={ Mail } placeholder="Enter your email" label="Email"/>
                <Textfield trailingIcon={ Search } placeholder="Search" label="Search"/>
                <PhoneTextField countries={ countries } onCountryChange={ () => "" } placeholder="Enter your number"
                                label="Phone"/>
            </ComponentsShowcase>
        </ComponentsContainer>

        <ComponentsContainer>
            <ComponentsTitle>
                Hints
                <ComponentsParagraph>
                    You can add subtext to textfield by using <code>hint</code> prop
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <Textfield placeholder="Enter your email" hint="Enter your real email"/>
                <Textfield leadingIcon={ Mail } placeholder="Enter your email" hint="Enter your real email"/>
                <Textfield trailingIcon={ Search } placeholder="Search" hint="Start entering your request"/>
                <PhoneTextField countries={ countries } onCountryChange={ () => "" } placeholder="Enter your number"
                                hint="Enter your real number"/>
            </ComponentsShowcase>
        </ComponentsContainer>

        <ComponentsContainer>
            <ComponentsTitle>
                Error
                <ComponentsParagraph>
                    You can show error by using <code>error</code> prop
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <Textfield placeholder="Enter your email" error="Invalid email"/>
                <Textfield leadingIcon={ Mail } placeholder="Enter your email" error="Invalid email"/>
                <Textfield trailingIcon={ Search } placeholder="Search" error="Invalid request"/>
                <PhoneTextField countries={ countries } onCountryChange={ () => "" } error="Invalid phone"
                                hint="Enter your real number"/>
            </ComponentsShowcase>
        </ComponentsContainer>
    </Layout>
}

const countries = [
    {label: "US", value: "us"},
    {label: "RU", value: "ru"},
    {label: "CN", value: "cn"},
    {label: "JP", value: "jp"},
    {label: "DE", value: "de"},
    {label: "FR", value: "fr"},
    {label: "IT", value: "it"},
    {label: "ES", value: "es"},
    {label: "GB", value: "gb"},
    {label: "CA", value: "ca"},
    {label: "AU", value: "au"},
    {label: "BR", value: "br"},
    {label: "IN", value: "in"},
]