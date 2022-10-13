import { Route } from "@router/router";
import { IndexLibrary } from "@feats/library/pages/index";
import { Buttons } from "@feats/library/pages/buttons/buttons";
import { InputsPreview } from "@feats/library/pages/inputs/inputs";
import { ButtonGroups } from "@feats/library/pages/button-groups/button-groups";
import { Badges } from "@feats/library/pages/badges/badges";
import { Dropdowns } from "@feats/library/pages/dropdown/dropdowns";
import { Toggles } from "@feats/library/pages/toggles/toggles";
import { Checkboxes } from "@feats/library/pages/checkboxes/checkboxes";
import { Avatars } from "@feats/library/pages/avatars/avatars";
import { ColorStyles } from "@feats/library/pages/color-styles/color-styles";

export const libraryRoutes: Route[] = [
    {
        path: "/apps/components",
        page: <IndexLibrary/>
    },
    {
        path: "/apps/components/buttons",
        page: <Buttons/>
    },
    {
        path: "/apps/components/inputs",
        page: <InputsPreview/>
    },
    {
        path: "/apps/components/button-groups",
        page: <ButtonGroups/>
    },
    {
        path: "/apps/components/badges",
        page: <Badges/>
    }, 
    {
        path: "/apps/components/dropdowns",
        page: <Dropdowns/>
    },
    {
        path: "/apps/components/toggles",
        page: <Toggles/>
    },
    {
        path: "/apps/components/checkboxes",
        page: <Checkboxes/>
    },
    {
        path: "/apps/components/avatars",
        page: <Avatars/>
    },
    {
        path: "/apps/components/color-styles",
        page: <ColorStyles/>
    },
]