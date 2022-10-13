import React from "react";
import styles from "./buttons.module.scss";
import { Layout } from "@core/components/layout/layout";
import { PreviewHeader } from "@core/components/sections/headers/preview/preview";
import {
    ComponentsContainer, ComponentsParagraph,
    ComponentsTitle, ComponentsShowcase
} from "@feats/library/components/components-container/components-container";
import { Button } from "react-untitled-ui";
import { User } from "react-feather";

export const Buttons: React.FC = () => {
    return <Layout className={ styles.buttons }>
        <PreviewHeader
            badge="Components"
            title="Button components"
            subtitle="A button is an interactive element that results in an action described in it. They’re one of the most essential components in modern UI design, so it’s important to get right."/>

        <ComponentsContainer>
            <ComponentsTitle>
                Variants
                <ComponentsParagraph>
                    untitled-ui includes 7 predefined button style variants. 
                    Use <code>variant</code> prop to change button style
                </ComponentsParagraph>
            </ComponentsTitle>
            
            <ComponentsShowcase>
                <Button variant="primary">Button</Button>
                <Button variant="secondary">Button</Button>
                <Button variant="secondary-gray">Button</Button>
                <Button variant="tertiary">Button</Button>
                <Button variant="tertiary-gray">Button</Button>
                <Button variant="link">Button</Button>
                <Button variant="link-gray">Button</Button>
            </ComponentsShowcase>

            <ComponentsTitle>
                Sizes
                <ComponentsParagraph>
                    untitled-ui includes 5 predefined button sizes.
                    Use <code>size</code> prop to change button size
                </ComponentsParagraph>
            </ComponentsTitle>

            <ComponentsShowcase>
                <Button size="sm">Button</Button>
                <Button size="md">Button</Button>
                <Button size="lg">Button</Button>
                <Button size="xl">Button</Button>
                <Button size="2xl">Button</Button>
            </ComponentsShowcase>

            <ComponentsTitle>
                Loading state
                <ComponentsParagraph>
                    You can show spinner by using <code>loading</code> prop
                </ComponentsParagraph>
            </ComponentsTitle>

            <ComponentsShowcase>
                <Button variant="primary" loading>Button</Button>
                <Button variant="secondary" loading>Button</Button>
                <Button variant="secondary-gray" loading>Button</Button>
                <Button variant="tertiary" loading>Button</Button>
                <Button variant="tertiary-gray" loading>Button</Button>
                <Button variant="link" loading>Button</Button>
                <Button variant="link-gray" loading>Button</Button>
            </ComponentsShowcase>

            <ComponentsTitle>
                Error state
                <ComponentsParagraph>
                    You can show error state by using <code>error</code> prop
                </ComponentsParagraph>
            </ComponentsTitle>

            <ComponentsShowcase>
                <Button variant="primary" error>Button</Button>
                <Button variant="secondary" error>Button</Button>
                <Button variant="secondary-gray" error>Button</Button>
                <Button variant="tertiary" error>Button</Button>
                <Button variant="tertiary-gray" error>Button</Button>
                <Button variant="link" error>Button</Button>
                <Button variant="link-gray" error>Button</Button>
            </ComponentsShowcase>

            {/* disabled state */ }
            <ComponentsTitle>
                Disabled state
                <ComponentsParagraph>
                    You can disable button by using <code>disabled</code> prop
                </ComponentsParagraph>
            </ComponentsTitle>

            <ComponentsShowcase>
                <Button variant="primary" disabled>Button</Button>
                <Button variant="secondary" disabled>Button</Button>
                <Button variant="secondary-gray" disabled>Button</Button>
                <Button variant="tertiary" disabled>Button</Button>
                <Button variant="tertiary-gray" disabled>Button</Button>
                <Button variant="link" disabled>Button</Button>
                <Button variant="link-gray" disabled>Button</Button>
            </ComponentsShowcase>
            
            <ComponentsTitle>
                Trailing icon
                <ComponentsParagraph>
                    You can append icon before text by using <code>trailingIcon</code> prop
                </ComponentsParagraph>
            </ComponentsTitle>

            <ComponentsShowcase>
                <Button variant="primary" trailingIcon={ User }>Button</Button>
                <Button variant="secondary" trailingIcon={ User }>Button</Button>
                <Button variant="secondary-gray" trailingIcon={ User }>Button</Button>
                <Button variant="tertiary" trailingIcon={ User }>Button</Button>
                <Button variant="tertiary-gray" trailingIcon={ User }>Button</Button>
                <Button variant="link" trailingIcon={ User }>Button</Button>
                <Button variant="link-gray" trailingIcon={ User }>Button</Button>
            </ComponentsShowcase>

            <ComponentsTitle>
                Leading icon
                <ComponentsParagraph>
                    You can append icon after text by using <code>leadingIcon</code> prop
                </ComponentsParagraph>
            </ComponentsTitle>

            <ComponentsShowcase>
                <Button variant="primary" leadingIcon={ User }>Button</Button>
                <Button variant="secondary" leadingIcon={ User }>Button</Button>
                <Button variant="secondary-gray" leadingIcon={ User }>Button</Button>
                <Button variant="tertiary" leadingIcon={ User }>Button</Button>
                <Button variant="tertiary-gray" leadingIcon={ User }>Button</Button>
                <Button variant="link" leadingIcon={ User }>Button</Button>
                <Button variant="link-gray" leadingIcon={ User }>Button</Button>
            </ComponentsShowcase>
        </ComponentsContainer>
    </Layout>
}