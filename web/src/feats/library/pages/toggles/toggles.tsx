import React from "react";
import { PreviewHeader } from "@core/components/sections/headers/preview/preview";
import { Layout } from "@core/components/layout/layout";
import {
    ComponentsContainer,
    ComponentsParagraph, ComponentsShowcase,
    ComponentsTitle
} from "@feats/library/components/components-container/components-container";
import { Toggle, ToggleProps } from "react-untitled-ui";


export const Toggles: React.FC = () => {
    return <Layout>
        <PreviewHeader
            badge="Components"
            title="Toggle components"
            subtitle="Toggles (also known as “switches”) is a UI control that has two mutually-exclusive states, such as ON and OFF. The design and functionality of this component is based on a physical switch that allows users to turn things ON or OFF. Toggles are a great visual cue for settings, especially on mobile, because they take less screen estate (in comparison with two radio buttons)."/>

        <ComponentsContainer>
            <ComponentsTitle>
                Size
                <ComponentsParagraph>
                    You can change the size of the toggle by using the <code>size</code> prop.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <ToggleComp size="sm" label="My toggle" id="toggle-1"/>
                <ToggleComp size="md" label="My toggle" id="toggle-2"/>
            </ComponentsShowcase>

            <ComponentsTitle>
                Support text
                <ComponentsParagraph>
                    You can add support text to the toggle by using the <code>supportText</code> prop.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <ToggleComp size="sm" label="My toggle" id="toggle-3" supportText="This is my important toggle"/>
                <ToggleComp size="md" label="My toggle" id="toggle-4" supportText="This is my important toggle"/>
            </ComponentsShowcase>

            <ComponentsTitle>
                Disabled
                <ComponentsParagraph>
                    You can disable the toggle by using the <code>disabled</code> prop.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <ToggleComp size="sm" label="My toggle" id="toggle-5" disabled/>
                <ToggleComp size="md" label="My toggle" id="toggle-6" disabled/>
            </ComponentsShowcase>
        </ComponentsContainer>
    </Layout>
}

export const ToggleComp: React.FC<Omit<ToggleProps, "value" | "onChange">> = (props) => {
    const [value, setValue] = React.useState(false);
    return <Toggle value={ value } onChange={ setValue } { ...props }/>
}
