import axios from "axios";
import { predictBrainCancer } from "@api";

const mockAxios = axios as jest.Mocked<typeof axios>;

it('should predict brain cancer', function () {
    // Mocking the axios client
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
        status: 200,
        data: {
            Predict: [
                {title: "glioma", value: 50},
                {title: "meningioma", value: 25},
                {title: "p tumor", value: 100},
                {title: "no tumor", value: 75},
            ],
        },
    }));

    // expect answer to be brain cancer
    expect(predictBrainCancer(new File([], "brain.jpg"))).resolves.toEqual([
        {label: "Гипофизная опухоль", probability: 1},
        {label: "Здоров", probability: 0.75},
        {label: "Глиома", probability: 0.5},
        {label: "Менингиома", probability: 0.25},
    ]);
    
    // expect axios to be called one time
    expect(mockAxios.post).toHaveBeenCalledTimes(1);

    // expect axios to be called with correct params
    expect(mockAxios.post).toHaveBeenCalledWith("/brain", expect.any(FormData));
    
}); 