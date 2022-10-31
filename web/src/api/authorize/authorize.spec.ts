import axios from "axios";
import { authorize } from "@api";

const mockAxios = axios as jest.Mocked<typeof axios>;

it("should return token", () => {
    // Mocking the axios client
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({status: 200, data: {access_token: "123__"}}));
    
    // expect correct token
    expect(authorize("user123", "qwerty123")).resolves.toEqual("123__");
    
    // expect one call
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    
    // expect correct passed arguments to the axios client
    expect(mockAxios.post).toHaveBeenCalledWith("/", {
        username: "user123",
        password_hash: "qwerty123",
    });
})

it("should return null", () => {
    // Mocking the axios client
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({status: 400, data: {}}));
    
    // expect null
    expect(authorize("user123", "qwerty123")).resolves.toEqual(null);
    
    // expect one call
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    
    // expect correct passed arguments to the axios client
    expect(mockAxios.post).toHaveBeenCalledWith("/", {
        username: "user123",
        password_hash: "qwerty123",
    });
})
