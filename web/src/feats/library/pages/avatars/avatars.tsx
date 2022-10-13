import React from "react";
import { Layout } from "@core/components/layout/layout";
import { PreviewHeader } from "@core/components/sections/headers/preview/preview";
import {
    ComponentsContainer, ComponentsParagraph,
    ComponentsShowcase,
    ComponentsTitle
} from "@feats/library/components/components-container/components-container";
import { Avatar } from "react-untitled-ui";

export type AvatarsProps = {}

export const Avatars: React.FC<AvatarsProps> = () => {
    return <Layout>
        <PreviewHeader
            badge="Components"
            title="Avatars components"
            subtitle="Untitled UI is already set up with a purposeful set of 60+ avatar color styles as the perfect starting point for any brand or project, all neatly-organized with matching placeholder names. Just select an avatar component (or any shape) and you'll see each avatar saved as an image fill. You can swap the images in these styles to change the avatar image used in all previous designs."/>

        <ComponentsContainer>
            <ComponentsTitle>
                Size
                <ComponentsParagraph>
                    Use the <code>size</code> prop to change the size of the avatar.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <Avatar size="sm" src="/avatars/olivia.png"/>
                <Avatar size="md" src="/avatars/olivia.png"/>
                <Avatar size="lg" src="/avatars/olivia.png"/>
                <Avatar size="xl" src="/avatars/olivia.png"/>
                <Avatar size="2xl" src="/avatars/olivia.png"/>
            </ComponentsShowcase>

            <ComponentsTitle>
                Source
                <ComponentsParagraph>
                    You can use image src, 1-2 user letters or a placeholder icon 
                </ComponentsParagraph>
                <ComponentsShowcase>
                    <Avatar size="md" src="/avatars/olivia.png"/>
                    <Avatar size="md" text="AL"/>
                    <Avatar size="md" />
                </ComponentsShowcase>
            </ComponentsTitle>

            <ComponentsTitle>
                Online badge
                <ComponentsParagraph>
                    You can use the <code>indicator</code> prop to show a green dot on the avatar
                </ComponentsParagraph>
                <ComponentsShowcase>
                    <Avatar size="md" src="/avatars/olivia.png" indicator/>
                    <Avatar size="md" text="AL" indicator/>
                    <Avatar size="md" indicator />
                </ComponentsShowcase>
            </ComponentsTitle>
        </ComponentsContainer>
    </Layout>
}