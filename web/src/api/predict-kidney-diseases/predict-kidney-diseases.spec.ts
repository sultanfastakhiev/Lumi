import axios from "axios";
import { predictKidneyDiseases } from "@api";

const mockAxios = axios as jest.Mocked<typeof axios>;

it('should predict kidney diseases', function () {
    // Mocking the axios client
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
        status: 200,
        data: {
            cyst: 14,
            normal: 86,
            stone: 29,
            tumor: 72,
        },
    }));

    // expect answer to be kidney diseases
    expect(predictKidneyDiseases(new File([], "kidney.jpg"))).resolves.toEqual([
        {label: "Здоров", probability: 0.86},
        {label: "Опухоль", probability: 0.72},
        {label: "Камень", probability: 0.29},
        {label: "Киста", probability: 0.14},
    ]);

    // expect axios to be called one time
    expect(mockAxios.post).toHaveBeenCalledTimes(1);

    // expect axios to be called with correct params
    expect(mockAxios.post).toHaveBeenCalledWith("/test", expect.any(FormData));
})