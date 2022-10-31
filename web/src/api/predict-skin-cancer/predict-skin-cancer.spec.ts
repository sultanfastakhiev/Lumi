import axios from "axios";
import { predictSkinCancer } from "@api";

const mockAxios = axios as jest.Mocked<typeof axios>;

it('should predict skin cancer', function () {
    // Mocking the axios client
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
        status: 200,
        data: {
            Predict: [
                {
                    title: "melanoma",
                    value: 99,
                },
                {
                    title: "not_melanoma",
                    value: 1,
                },
            ]
        },
    }));

    // expect answer to be skin cancer
    expect(predictSkinCancer(new File([], "skin.jpg"))).resolves.toEqual([
        {label: "Меланома", probability: 0.99},
        {label: "Здоров", probability: 0.01},
    ]);

    // expect axios to be called one time
    expect(mockAxios.post).toHaveBeenCalledTimes(1);

    // expect axios to be called with correct params
    expect(mockAxios.post).toHaveBeenCalledWith("/melanoma", expect.any(FormData));
})
