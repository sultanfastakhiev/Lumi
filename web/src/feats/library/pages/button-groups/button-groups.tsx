import React from "react";
import { PreviewHeader } from "@core/components/sections/headers/preview/preview";
import { Layout } from "@core/components/layout/layout";
import {
    ComponentsContainer,
    ComponentsParagraph,
    ComponentsShowcase,
    ComponentsTitle
} from "@feats/library/components/components-container/components-container";
import { Button, ButtonGroup } from "react-untitled-ui";

export const ButtonGroups: React.FC = () => {
    return <Layout>
        <PreviewHeader
            badge="Components"
            title="Button groups components"
            subtitle="Button groups combine sets of buttons into toolbars or split buttons for more complex components. Button groups are also useful for acting as mini “tabs” in UI, for example, switching between date ranges."/>

        <ComponentsContainer>
            <ComponentsTitle>
                Variants
            </ComponentsTitle>

            <ComponentsShowcase>
                <ButtonGroup>
                    <Button variant="primary">Button 1</Button>
                    <Button variant="primary">Button 2</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button variant="secondary">Button 1</Button>
                    <Button variant="secondary">Button 2</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button variant="secondary-gray">Button 1</Button>
                    <Button variant="secondary-gray">Button 2</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button variant="tertiary">Button 1</Button>
                    <Button variant="tertiary">Button 2</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button variant="tertiary-gray">Button 1</Button>
                    <Button variant="tertiary-gray">Button 2</Button>
                </ButtonGroup>
            </ComponentsShowcase>

            <ComponentsTitle>
                <ComponentsParagraph>
                    Button groups can include more that 2 buttons
                </ComponentsParagraph>
            </ComponentsTitle>
            
            <ComponentsShowcase>
                <ButtonGroup>
                    <Button variant="primary">Button 1</Button>
                    <Button variant="primary">Button 2</Button>
                    <Button variant="primary">Button 3</Button>
                    <Button variant="primary">Button 4</Button>
                    <Button variant="primary">Button 5</Button>
                </ButtonGroup>
            </ComponentsShowcase>

        </ComponentsContainer>
    </Layout>
}