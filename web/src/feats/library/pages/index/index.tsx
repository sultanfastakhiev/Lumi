import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { Layout } from "@core/components/layout/layout";
import { PreviewHeader } from "@core/components/sections/headers/preview/preview";

export const IndexLibrary: React.FC = () => {
    return <Layout>
        <PreviewHeader
            badge="UI Library"
            title="Component library"
            subtitle="Buttons, inputs, avatars — all of the base components you need for modern dashboard design"/>

        <div className={ styles.indexPage }>

            <Card
                title="Color styles"
                link="/apps/components/color-styles"
                image="/images/previews/color-styles.png"
                description="333 styles"/>
            
            <div className={ styles.divider }></div>

            <Card
                title="Buttons"
                link="/apps/components/buttons"
                image="/images/previews/buttons.png"
                description="5 components + 940 variants"/>

            <Card
                title="Button groups"
                link="/apps/components/button-groups"
                image="/images/previews/button-groups.png"
                description="2 components + 35 variants"/>

            <Card
                title="Badges"
                link="/apps/components/badges"
                image="/images/previews/badges.png"
                description="3 components + 380 variants"/>

            <Card
                title="Inputs"
                link="/apps/components/inputs"
                image="/images/previews/inputs.png"
                description="5 components + 940 variants"/>

            <Card
                title="Dropdowns"
                link="/apps/components/dropdowns"
                image="/images/previews/dropdowns.png"
                description="6 components + 79 variants"/>

            <Card
                title="Toggles"
                link="/apps/components/toggles"
                image="/images/previews/toggles.png"
                description="2 components + 64 variants"/>

            <Card
                title="Checkboxes"
                link="/apps/components/checkboxes"
                image="/images/previews/checkboxes.png"
                description="2 components + 128 variants"/>

            <Card
                title="Avatars"
                link="/apps/components/avatars"
                image="/images/previews/avatars.png"
                description="280 components + 98 variants"/>
        </div>
    </Layout>
}

type CardProps = {
    title: string;
    description: string;
    image: string;
    link: string;
}

const Card: React.FC<CardProps> = (props) => {
    return <Link to={ props.link } className={ styles.card }>
        <img src={ props.image } alt={ props.title } className={ styles.cardImage }/>
        <div className={ styles.cardContent }>
            <h4 className={ styles.cardTitle }>{ props.title }</h4>
            <p className={ styles.cardDescription }>{ props.description }</p>
        </div>
    </Link>
}