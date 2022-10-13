import React from "react";
import { PreviewHeader } from "@core/components/sections/headers/preview/preview";
import { Layout } from "@core/components/layout/layout";
import {
    ComponentsContainer, ComponentsParagraph,
    ComponentsShowcase,
    ComponentsTitle
} from "@feats/library/components/components-container/components-container";
import { Checkbox, CheckboxProps } from "react-untitled-ui";

export type CheckboxesProps = {}

export const Checkboxes: React.FC<CheckboxesProps> = () => {
    return <Layout>
        <PreviewHeader
            badge="Components"
            title="Checkbox components"
            subtitle="Checkboxes allow users to select one or more items from a set, while radio buttons allow users to select just one option from a set. Both can also be used to turn an option on or off."/>

        <ComponentsContainer>
            <ComponentsTitle>
                Size
                <ComponentsParagraph>
                    You can change the size of the checkbox by using the <code>size</code> prop.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <CheckboxComp size="sm" id="checkbox-1"/>
                <CheckboxComp size="md" id="checkbox-2"/>
                <CheckboxComp size="sm" id="checkbox-3" label="My checkbox"/>
                <CheckboxComp size="md" id="checkbox-4" label="My checkbox"/>
            </ComponentsShowcase>

            <ComponentsTitle>
                Support text
                <ComponentsParagraph>
                    You can add support text to the checkbox by using the <code>supportText</code> prop.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <CheckboxComp size="sm" id="checkbox-5" supportText="This is my important checkbox"/>
                <CheckboxComp size="md" id="checkbox-6" supportText="This is my important checkbox"/>
                <CheckboxComp size="sm" id="checkbox-7" label="My checkbox"
                              supportText="This is my important checkbox"/>
                <CheckboxComp size="md" id="checkbox-8" label="My checkbox"
                              supportText="This is my important checkbox"/>
            </ComponentsShowcase>

            <ComponentsTitle>
                Disabled
                <ComponentsParagraph>
                    You can disable the checkbox by using the <code>disabled</code> prop.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <CheckboxComp size="sm" id="checkbox-9" disabled/>
                <CheckboxComp size="md" id="checkbox-10" disabled/>
                <CheckboxComp size="sm" id="checkbox-11" label="My checkbox" disabled/>
                <CheckboxComp size="md" id="checkbox-12" label="My checkbox" disabled/>
            </ComponentsShowcase>

            <ComponentsTitle>
                Radio
                <ComponentsParagraph>
                    You can change the checkbox to a radio button by using the <code>type=radio</code> prop.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <CheckboxComp size="sm" id="checkbox-13" type="radio"/>
                <CheckboxComp size="md" id="checkbox-14" type="radio"/>
                <CheckboxComp size="sm" id="checkbox-15" label="My checkbox" type="radio"/>
                <CheckboxComp size="md" id="checkbox-16" label="My checkbox" type="radio"/>
            </ComponentsShowcase>   
        </ComponentsContainer>
    </Layout>
}

export const CheckboxComp: React.FC<Omit<CheckboxProps, "value" | "onChange">> = (props) => {
    const [value, setValue] = React.useState(false);
    return <Checkbox value={ value } onChange={ setValue } { ...props }/>
}
