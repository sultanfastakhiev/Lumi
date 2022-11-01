import { NavBar } from "@core/components";
import { fireEvent, render } from "@testing-library/react";
import { useSidebar } from "@core/hooks/use-sidebar";

jest.mock("@core/hooks/use-sidebar");
jest.mock("@config/sidebar");

describe("Navbar", () => {
    it('should toggle sidebar', function () {
        // spy on useSidebar hook
        const toggleSidebar = jest.fn();
        (useSidebar as jest.Mock).mockReturnValue({toggleSidebar});
        
        const {getByTestId} = render(<NavBar/>);
        const menuIcon = getByTestId("menu-icon");
        
        // click on menu icon
        fireEvent.click(menuIcon);
        
        // expect toggleSidebar to be called once
        expect(toggleSidebar).toBeCalledTimes(1);
    });
})
    