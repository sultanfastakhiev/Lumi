import React from "react";
import { PreviewHeader } from "@core/components/sections/headers/preview/preview";
import { Layout } from "@core/components/layout/layout";
import {
    ComponentsContainer,
    ComponentsParagraph, ComponentsShowcase,
    ComponentsTitle
} from "@feats/library/components/components-container/components-container";
import { Badge } from "react-untitled-ui";

export type BadgesProps = {}

export const Badges: React.FC<BadgesProps> = () => {
    return <Layout>
        <PreviewHeader
            badge="Components"
            title="Badges components"
            subtitle="Badges help highlight important information, such as notifications or new and unread messages. They’re primarily used for communicating secondary or additional information to text."/>

        <ComponentsContainer>
            <ComponentsTitle>
                Colors
                <ComponentsParagraph>
                    Badges can be used with different colors.
                    Use the <code>color</code> prop to change the color of the badge.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <Badge color="primary">Badge</Badge>
                <Badge color="gray">Badge</Badge>
                <Badge color="error">Badge</Badge>
                <Badge color="orange">Badge</Badge>
                <Badge color="rose">Badge</Badge>
                <Badge color="pink">Badge</Badge>
                <Badge color="blue">Badge</Badge>
                <Badge color="purple">Badge</Badge>
                <Badge color="indigo">Badge</Badge>
                <Badge color="blue-light">Badge</Badge>
                <Badge color="blue-gray">Badge</Badge>
                <Badge color="blue-gray">Badge</Badge>
                <Badge color="success">Badge</Badge>
                <Badge color="warning">Badge</Badge>
            </ComponentsShowcase>

            <ComponentsTitle>
                Variants
                <ComponentsParagraph>
                    Badges can be 3 different variants.
                    Use the <code>variant</code> prop to change the variant of the badge.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <Badge variant="default">Badge</Badge>
                <Badge variant="dot">Badge</Badge>
                <Badge variant="close">Badge</Badge>
            </ComponentsShowcase>
        </ComponentsContainer>
    </Layout>
}