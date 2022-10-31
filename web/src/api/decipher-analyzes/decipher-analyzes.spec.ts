import axios from "axios";
import { decipherAnalyzes } from "@api";

const mockAxios = axios as jest.Mocked<typeof axios>;

it("should decipher analyzes", function () {
    // Mocking the axios client
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
        status: 200, 
        data: {
            predict: [
                {title: "prediction 1", value: 50},
                {title: "prediction 3", value: 25},
                {title: "prediction 2", value: 100},
                {title: "prediction 4", value: 75},
            ],
        },
    }));

    // expect answer to be sorted prediction array
    expect(decipherAnalyzes(new File(["1", "22", "333"], "test.csv"))).resolves.toEqual([
        {label: "prediction 2", probability: 1},
        {label: "prediction 4", probability: 0.75},
        {label: "prediction 1", probability: 0.5},
        {label: "prediction 3", probability: 0.25},
    ]);

    // expect one call
    expect(mockAxios.post).toHaveBeenCalledTimes(1);

    // expect correct passed arguments to the axios client
    expect(mockAxios.post).toHaveBeenCalledWith("/test_an", expect.any(FormData));
});