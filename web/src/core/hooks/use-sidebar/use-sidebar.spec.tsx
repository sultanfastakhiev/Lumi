import { useSidebar, useSidebarItem } from "@core/hooks/use-sidebar/use-sidebar";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectIsSidebarMobileOpen, selectIsSidebarOpen, toggle, toggleMobile } from "@core/redux/sidebar-slice";
import { useMediaQuery } from "react-responsive";
import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "@api";
import { useRouter } from "next/router";
import { NavPage } from "@core/types/layout";
import { renderHook } from "@testing-library/react";

// mock redux hooks
jest.mock("@redux/hooks", () => ({
    useAppSelector: jest.fn(),
    useAppDispatch: jest.fn(),
}));

// mock useQuery
jest.mock("@tanstack/react-query", () => ({
    useQuery: jest.fn(),
}));

// mock useMediaQuery
jest.mock("react-responsive", () => ({
    useMediaQuery: jest.fn(),
}));

// mock router
jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}));

// mock @core/utils
jest.mock("@core/utils", () => ({
    isServer: jest.fn(),
}));

afterAll(() => {
    jest.resetAllMocks();
})

describe("useSidebar", () => {
    it("should return correct object", () => {
        // mock useAppDispatch
        const mockDispatch = jest.fn();
        (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);

        // mock useAppSelector to return true
        (useAppSelector as jest.Mock).mockReturnValue(true);

        // mock useMediaQuery to return false
        (useMediaQuery as jest.Mock).mockReturnValueOnce(false);

        // mock useQuery to return { data: { user: { username: "test" } } }
        (useQuery as jest.Mock).mockReturnValueOnce({data: {username: "test"}});

        // mock useRouter to return fake router
        const mockReplace = jest.fn();
        (useRouter as jest.Mock).mockReturnValueOnce({replace: mockReplace});

        const hook = useSidebar();

        expect(hook).toEqual({
            isSidebarOpened: true,
            toggleSidebar: expect.any(Function),
            user: {username: "test"},
            handleLogout: expect.any(Function),
            mobileOpen: true,
            toggleMainSidebar: expect.any(Function),
        })

        // expect useAppSelector to be called with selectIsSidebarOpen
        expect(useAppSelector).toBeCalledWith(selectIsSidebarOpen);

        // expect useAppSelector to be called with selectIsSidebarMobileOpen
        expect(useAppSelector).toBeCalledWith(selectIsSidebarMobileOpen);

        // expect useMediaQuery to be called  with { query: "(max-width: 767px)" }
        expect(useMediaQuery).toBeCalledWith({query: "(max-width: 767px)"});

        // expect useQuery to be called with "me", fetchMe
        expect(useQuery).toBeCalledWith(["me"], fetchMe);

        // calling toggleSidebar should dispatch toggle action
        hook.toggleSidebar();
        expect(mockDispatch).toBeCalledWith(toggle());

        // calling toggleMainSidebar should dispatch toggle action
        hook.toggleMainSidebar();
        expect(mockDispatch).toBeCalledWith(toggle());

        // calling handleLogout should call logout and router.replace("/login")
        hook.handleLogout();
        expect(mockDispatch).toBeCalledWith(toggle());
        expect(mockReplace).toBeCalledWith("/login");
    });
});

describe("useSidebarItem", () => {
    it("should return correct object on NavPage", () => {
        // mock useAppSelector(selectIsSidebarOpen) to return true
        (useAppSelector as jest.Mock).mockReturnValue(true);
        
        // mock useMediaQuery to return true
        (useMediaQuery as jest.Mock).mockReturnValue(true);
        
        // mock useAppDispatch
        const mockDispatch = jest.fn();
        (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
        
        // mock router to include /test as pathname
        (useRouter as jest.Mock).mockReturnValue({pathname: "/test/123"});
        
        const navPage: NavPage = {
            type: "page",
            icon: <div>icon</div>,
            url: "/test",
            key: "123",
            text: "test text",
        }
        const { result: { current: hook } } = renderHook(() => useSidebarItem(navPage, "123"));
        
        expect(hook).toEqual({
            open: true,
            hasChildren: false,
            collapsed: false,
            getCollapseProps: expect.any(Function),
            getToggleProps: expect.any(Function),
            active: true,
            activeChildren: undefined,
            handleItemClick: expect.any(Function),
        })
        
        // expect handleItemClick to dispatch toggleMobile action
        hook.handleItemClick();
        expect(mockDispatch).toBeCalledWith(toggleMobile());
    });
})