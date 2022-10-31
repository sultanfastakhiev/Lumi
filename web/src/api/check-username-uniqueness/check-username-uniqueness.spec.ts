import axios from "axios";
import { checkUsernameUniqueness } from "@api";

const mockAxios = axios as jest.Mocked<typeof axios>;

it("should return true", () => {
    // Mocking the axios client
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({status: 200, data: {access_token: "123__"}}));

   // expect answer to be true
    expect(checkUsernameUniqueness("user123")).resolves.toEqual(true);
    
    // expect one call
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    
    // expect correct passed arguments to the axios client
    expect(mockAxios.post).toHaveBeenCalledWith("/check_username", {
        username: "user123",
    });
})

it("should return false", () => {
    // Mocking the axios client
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({status: 400, data: {}}));
    
    // expect answer to be false
    expect(checkUsernameUniqueness("user123")).resolves.toEqual(false);
    
    // expect one call
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    
    // expect correct passed arguments to the axios client
    expect(mockAxios.post).toHaveBeenCalledWith("/check_username", {
        username: "user123",
    });
})
