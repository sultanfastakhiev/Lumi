import axios from "axios";
import { fetchMe } from "@api";

const mockAxios = axios as jest.Mocked<typeof axios>;

it('should fetch user', function () {
    // Mocking the axios client
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        status: 200,
        data: {
            id: "1",
            username: "test",
            name: "test1",
            last_name: "test2",
            patronymic: "test3",
            birthday: "01.01.2000",
        },
    }));
    
    // expect answer to be parsed user
    expect(fetchMe()).resolves.toEqual({
        id: "1",
        username: "test",
        name: "test1",
        lastName: "test2",
        patronymic: "test3",
        birthday: "01.01.2000",
    });
});

it('should return null on error', function () {
    // Mocking the axios client
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        status: 404,
    }));
    
    // expect answer to be null
    expect(fetchMe()).resolves.toBeNull();
}); 