import { fireEvent, render, waitFor } from "@testing-library/react";
import { LoginPage } from "@feats/auth/pages/login/login";
import { useAppDispatch } from "@redux/hooks";

// mock useAppDispatch hook
jest.mock("@redux/hooks", () => ({
    useAppDispatch: jest.fn(),
}));

// mock useRouter hook
jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}));

// mock useErrorToast hook
jest.mock("@core/utils", () => ({
    useErrorToast: jest.fn(),
    createFormik: (config: any) => config
}));

// mock selectAuthType
jest.mock("@feats/auth/redux/auth/auth-selectors", () => ({
    selectAuthType: jest.fn(),
}));

// mock login action
jest.mock("@feats/auth/redux/auth/auth-actions", () => ({
    login: jest.fn(),
}));

// mock store
jest.mock("@redux/store", () => ({
    store: {
        getState: jest.fn(),
    }
}));

// mock getHomeRoute
jest.mock("@router/get-home-route", () => ({
    getHomeRoute: jest.fn(),
}));

describe("Login page", () => {
    afterAll(() => {
        jest.resetAllMocks();
    })

    it('should authorize user', async function () {
        // mock useAppDispatch hook
        const mockDispatch = jest.fn();
        (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);

        // mock useRouter hook
        const useRouter = jest.requireMock("next/router").useRouter;
        const router = {replace: jest.fn()};
        useRouter.mockReturnValue(router);

        // mock useErrorToast hook
        const useErrorToast = jest.requireMock("@core/utils").useErrorToast;
        const errorToast = jest.fn();
        useErrorToast.mockReturnValue(errorToast);

        // render component
        const {getByText, getAllByText, getByPlaceholderText} = render(<LoginPage/>);

        // expect username field to be present and empty 
        expect(getByPlaceholderText("Введите свой username")).toBeInTheDocument();
        expect(getByPlaceholderText("Введите свой username")).toHaveValue("");

        // expect password field to be present and empty
        expect(getByPlaceholderText("••••••••")).toBeInTheDocument();
        expect(getByPlaceholderText("••••••••")).toHaveValue("");

        // click on login button
        fireEvent.click(getByText("Войти"));

        // expect 2 validation errors to be present
        await waitFor(() => {
            expect(getAllByText("Это поле обязательно")).toHaveLength(2);
        })

        // fill username field
        fireEvent.change(getByPlaceholderText("Введите свой username"), {target: {value: "username"}});

        // fill password field
        fireEvent.change(getByPlaceholderText("••••••••"), {target: {value: "password"}});

        // mock selectAuthType hook return authorized
        const selectAuthType = jest.requireMock("@feats/auth/redux/auth/auth-selectors").selectAuthType;
        selectAuthType.mockReturnValue("authorized");

        // mock getHomeRoute hook return home
        const getHomeRoute = jest.requireMock("@router/get-home-route").getHomeRoute;
        getHomeRoute.mockReturnValue("/home");

        // mock login 
        const login = jest.requireMock("@feats/auth/redux/auth/auth-actions").login;
        login.mockReturnValue({type: "login", payload: {username: "username", password: "password"}});

        // click on login button
        fireEvent.click(getByText("Войти"));

        // expect dispatch to be called with correct arguments
        await waitFor(() => {
            expect(mockDispatch).toBeCalledWith({
                type: "login",
                payload: {username: "username", password: "password"},
            });
        })
        
        //expect login to be called with correct arguments
        await waitFor(() => {
            expect(login).toBeCalledWith({username: "username", password: "password"});
        })

        // expect router.replace to be called with correct arguments
        await waitFor(() => {
            expect(router.replace).toBeCalledWith("/home");
        })
    });
    
    it('should show error toast', async function () {
        // mock useAppDispatch hook
        const mockDispatch = jest.fn();
        (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
        
        // mock useErrorToast hook
        const useErrorToast = jest.requireMock("@core/utils").useErrorToast;
        const errorToast = jest.fn();
        useErrorToast.mockReturnValue(errorToast);

        // mock useRouter hook
        const useRouter = jest.requireMock("next/router").useRouter;
        const router = {replace: jest.fn()};
        useRouter.mockReturnValue(router);

        // render component
        const {getByText, getByPlaceholderText} = render(<LoginPage/>);

        // fill username field
        fireEvent.change(getByPlaceholderText("Введите свой username"), {target: {value: "username"}});

        // fill password field
        fireEvent.change(getByPlaceholderText("••••••••"), {target: {value: "password"}});

        // mock selectAuthType hook return invalid
        const selectAuthType = jest.requireMock("@feats/auth/redux/auth/auth-selectors").selectAuthType;
        selectAuthType.mockReturnValue("invalid");
        
        // click on login button
        fireEvent.click(getByText("Войти"));
        
        // expect errorToast to be called with correct arguments
        await waitFor(() => {
            expect(errorToast).toBeCalledWith("Неверный username или пароль");
        })
        
        // expect router to not be called
        await waitFor(() => {
            expect(router.replace).not.toBeCalled();
        })
    })
})