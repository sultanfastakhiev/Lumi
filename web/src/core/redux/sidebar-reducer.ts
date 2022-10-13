import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import LocalStorage from "@core/services/local-storage";
import { RootState } from "@redux/store";
import { sidebarConfig } from "@config/sidebar";
import { isContainerNavPage } from "@core/types/layout";

type State = {
    open: boolean,
    expandedItems: string[], // stores keys of expanded items
}

const slice = createSlice({
    name: "core/ui/sidebar",
    initialState: () => {
        return {
            open: LocalStorage.isSidebarOpened,
            expandedItems: sidebarConfig.items.filter(
                x => isContainerNavPage(x) && x.children?.some(
                    x => window.location.href.includes(x.url)
                )
            ).map(x => x.key),
        } as State
    },
    reducers: {
        toggle: (state) => {
            const newValue = !state.open
            LocalStorage.isSidebarOpened = newValue
            state.open = newValue;
        },
        openSidebar: (state) => {
            LocalStorage.isSidebarOpened = true
            state.open = true;
        },
        toggleExpand: (state, action: PayloadAction<string>) => {
            if (state.expandedItems.includes(action.payload)) {
                state.expandedItems = state.expandedItems.filter(x => x !== action.payload)
            } else {
                state.expandedItems.push(action.payload)
            }
        },
        shrinkItem: (state, action: PayloadAction<string>) => {
            state.expandedItems = state.expandedItems.filter(x => x !== action.payload)
        }
    }
})

export default slice.reducer

export const {toggle, openSidebar, toggleExpand, shrinkItem} = slice.actions

export const selectIsSidebarOpen = (state: RootState) => state.coreSidebar.open
export const selectIsSidebarItemExpanded = (key: string) => (state: RootState) => state.coreSidebar.expandedItems.includes(key)
