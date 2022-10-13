import React from "react";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react";
import {ChevronRight} from "react-feather";

type BreadcrumbType = {
    text: string,
    href: string,
}

type Props = {
    items: BreadcrumbType[]
}

export const Breadcrumbs: React.FC<Props> = (props) => {
    return <Breadcrumb spacing="10px" separator={<ChevronRight size={16} color="var(--hint)"/>}>
        <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {
            props.items.map((item, i) => {
                return <BreadcrumbItem key={`${item.text}-${item.href}-${i}`}>
                    <BreadcrumbLink href={item.href}>{item.text}</BreadcrumbLink>
                </BreadcrumbItem>
            })
        }
    </Breadcrumb>
}