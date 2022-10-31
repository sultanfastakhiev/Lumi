import axios from "axios";
import { createUser } from "@api";

const mockAxios = axios as jest.Mocked<typeof axios>;

it("should create user", function () {
    // Mocking the axios client
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({status: 200}));
    
    // expect answer to be undefined
    expect(createUser({
        name: "John",
        lastName: "Doe",
        birthday: "1990-01-01",
        patronymic: "Ivanovich",
        username: "username",
        password: "password",
    })).resolves.toEqual(undefined);
    
    // expect one call
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    
    // expect correct passed arguments to the axios client
    expect(mockAxios.post).toHaveBeenCalledWith("/reg", {
        name: "John",
        last_name: "Doe",
        birthday: "01.01.1990",
        patronymic: "Ivanovich",
        username: "username",
        password_hash: "password",
    });
})

it('should return error message if error happened', function () {
    // Mocking the axios client
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({status: 400}));
    
    // expect answer to be true
    expect(createUser({
        name: "John",
        lastName: "Doe",
        birthday: "1990-01-01",
        patronymic: "Ivanovich",
        username: "username",
        password: "password",
    })).resolves.toEqual("Не удалось создать пользователя");
});