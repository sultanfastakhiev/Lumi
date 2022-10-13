import React, { CSSProperties } from "react";
import { PreviewHeader } from "@core/components/sections/headers/preview/preview";
import { Layout } from "@core/components/layout/layout";
import styles from "./color-styles.module.scss";
import {
    ComponentsContainer,
    ComponentsParagraph, ComponentsShowcase,
    ComponentsTitle
} from "@feats/library/components/components-container/components-container";

export type ColorStylesProps = {}

export const ColorStyles: React.FC<ColorStylesProps> = () => {
    return <Layout>
        <PreviewHeader
            badge="Foundation"
            title="Color styles"
            subtitle="Our design system leverages a purposeful set of color styles as the perfect starting point for any brand or project. When it comes to color, contrast is critical for ensuring text is legible. We've added WCAG 2.1 contrast ratios to our color system so you can make sure you're designing with accessibility in mind."/>

        <ComponentsContainer>
            <ComponentsTitle>
                Base
                <ComponentsParagraph>
                    These are base black and white color styles to quickly swap out if you need to.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <Card
                    color="#fff"
                    textColor="black"
                    text="AAA 2.1"
                    colorName="White"
                    supportText="#FFFFFF"/>
                <Card
                    color="black"
                    textColor="white"
                    text="AAA 21:1"
                    colorName="Black"
                    supportText="#000000"/>
            </ComponentsShowcase>

            <ComponentsTitle>
                Gray
                <ComponentsParagraph>
                    Gray is a neutral color and is the foundation of the color system. Almost everything in UI design —
                    text, form fields, backgrounds, dividers — are usually gray.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <Card
                    color="var(--untitled-gray--25)"
                    textColor="var(--untitled-gray--500)"
                    text="AA 4.84"
                    colorName="25"
                    supportText="#FCFCFD"/>
                <Card
                    color="var(--untitled-gray--50)"
                    textColor="var(--untitled-gray--500)"
                    text="AA 4.73"
                    colorName="50"
                    supportText="#F9FAFB"/>
                <Card
                    color="var(--untitled-gray--100)"
                    textColor="var(--untitled-gray--500)"
                    text="AA 4.49"
                    colorName="100"
                    supportText="#F2F4F7"/>
                <Card
                    color="var(--untitled-gray--200)"
                    textColor="var(--untitled-gray--500)"
                    text="4.19"
                    colorName="200"
                    supportText="#EAECF0"/>
                <Card
                    color="var(--untitled-gray--300)"
                    textColor="white"
                    text="1.48"
                    colorName="300"
                    supportText="#D0D5DD"/>
                <Card
                    color="var(--untitled-gray--400)"
                    textColor="white"
                    text="2.58"
                    colorName="400"
                    supportText="#98A2B3"/>
                <Card
                    color="var(--untitled-gray--500)"
                    textColor="white"
                    text="AA 4.95"
                    colorName="500"
                    supportText="#667085"/>
                <Card
                    color="var(--untitled-gray--600)"
                    textColor="white"
                    text="AAA 7.65"
                    colorName="600"
                    supportText="#475467"/>
                <Card
                    color="var(--untitled-gray--700)"
                    textColor="white"
                    text="AAA 10.41"
                    colorName="700"
                    supportText="#344054"/>
                <Card
                    color="var(--untitled-gray--800)"
                    textColor="white"
                    text="AAA 14.74"
                    colorName="800"
                    supportText="#1D2939"/>
                <Card
                    color="var(--untitled-gray--900)"
                    textColor="white"
                    text="AAA 17.79"
                    colorName="900"
                    supportText="#101828"/>
            </ComponentsShowcase>

            <ComponentsTitle>
                Primary
                <ComponentsParagraph>
                    The primary color is your "brand" color, and is used across all interactive elements such as buttons,
                    links, inputs, etc. This color can define the overall feel and can elicit emotion.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <Card
                    color="var(--untitled-primary--25)"
                    textColor="var(--untitled-primary--700)"
                    text="AA 6.39"
                    colorName="25"
                    supportText="#FCFAFF"/>
                <Card
                    color="var(--untitled-primary--50)"
                    textColor="var(--untitled-primary--700)"
                    text="AA 6.16"
                    colorName="50"
                    supportText="#F9F5FF"/>
                <Card
                    color="var(--untitled-primary--100)"
                    textColor="var(--untitled-primary--700)"
                    text="AA 5.74"
                    colorName="100"
                    supportText="#F4EBFF"/>
                <Card
                    color="var(--untitled-primary--200)"
                    textColor="var(--untitled-primary--700)"
                    text="AA 4.93"
                    colorName="200"
                    supportText="#E9D7FE"/>
                <Card
                    color="var(--untitled-primary--300)"
                    textColor="white"
                    text="1.70"
                    colorName="300"
                    supportText="#D6BBFB"/>
                <Card
                    color="var(--untitled-primary--400)"
                    textColor="white"
                    text="2.49"
                    colorName="400"
                    supportText="#B692F6"/>
                <Card
                    color="var(--untitled-primary--500)"
                    textColor="white"
                    text="3.33"
                    colorName="500"
                    supportText="#9E77ED"/>
                <Card
                    color="var(--untitled-primary--600)"
                    textColor="white"
                    text="AA 4.96"
                    colorName="600"
                    supportText="#7F56D9"/>
                <Card
                    color="var(--untitled-primary--700)"
                    textColor="white"
                    text="AA 6.63"
                    colorName="700"
                    supportText="#6941C6"/>
                <Card
                    color="var(--untitled-primary--800)"
                    textColor="white"
                    text="AAA 8.67"
                    colorName="800"
                    supportText="#53389E"/>
                <Card
                    color="var(--untitled-primary--900)"
                    textColor="white"
                    text="AAA 10.78"
                    colorName="900"
                    supportText="#42307D"/>
            </ComponentsShowcase>
        </ComponentsContainer>

    </Layout>
}

export type CardProps = {
    color: CSSProperties["backgroundColor"];
    textColor: CSSProperties["color"];
    colorName: string;
    text: string;
    supportText: string;
}

export const Card: React.FC<CardProps> = (props) => {
    return <div className={ styles.card }>
        <div className={ styles.swatch } style={ {backgroundColor: props.color, color: props.textColor} }>
            { props.text }
        </div>
        <div className={ styles.info }>
            <h3 className={ styles.text }>{ props.colorName }</h3>
            <p className={ styles.support }>{ props.supportText }</p>
        </div>
    </div>
}