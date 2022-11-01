// mock router
import { useRouter } from "next/router";
import AuthService from "@feats/auth/auth-service";
import { renderHook } from "@testing-library/react";
import { useAuthRestrictedRoutes } from "@core/hooks";

jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}));

// mock auth service
jest.mock("@feats/auth/auth-service", () => ({
    isSignedIn: jest.fn(),
}));

// clear mocks
afterAll(() => {
    jest.clearAllMocks();
});

describe("useAuthRestrictedRoutes", () => {
    it('should redirect', function () {
        // arrange
        const useRouterMock = useRouter as jest.Mock;
        useRouterMock.mockReturnValue({
            pathname: "/apps",
            replace: jest.fn(),
        });

        const isSignedInMock = AuthService.isSignedIn as jest.Mock;
        isSignedInMock.mockReturnValue(false);

        // act
        renderHook(() => useAuthRestrictedRoutes());

        // assert
        expect(useRouterMock).toHaveBeenCalled();
        expect(isSignedInMock).toHaveBeenCalled();
        expect(useRouterMock().replace).toHaveBeenCalledWith("/login");
    });
    
    it('should not redirect', function () {
        // arrange
        const useRouterMock = useRouter as jest.Mock;
        useRouterMock.mockReturnValue({
            pathname: "/apps",
            replace: jest.fn(),
        });

        const isSignedInMock = AuthService.isSignedIn as jest.Mock;
        isSignedInMock.mockReturnValue(true);

        // act
        renderHook(() => useAuthRestrictedRoutes());

        // assert
        expect(useRouterMock).toHaveBeenCalled();
        expect(isSignedInMock).toHaveBeenCalled();
        expect(useRouterMock().replace).not.toHaveBeenCalled();
    })
    
    it('should not redirect if pathname does not include apps', function () {
        // arrange
        const useRouterMock = useRouter as jest.Mock;
        useRouterMock.mockReturnValue({
            pathname: "/signup",
            replace: jest.fn(),
        });

        const isSignedInMock = AuthService.isSignedIn as jest.Mock;
        isSignedInMock.mockReturnValue(false);

        // act
        renderHook(() => useAuthRestrictedRoutes());

        // assert
        expect(useRouterMock).toHaveBeenCalled();
        expect(isSignedInMock).toHaveBeenCalled();
        expect(useRouterMock().replace).not.toHaveBeenCalled();
    })
});