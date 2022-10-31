import axios from "axios";
import { getPatient } from "@api";

const mockAxios = axios as jest.Mocked<typeof axios>;

it('should get patient by id', function () {
    // Mocking the axios client
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        status: 200,
        data: {
            id: "213",
            name: "John",
            last_name: "Doe",
            birthday: "01.01.1990",
            patronymic: "Ivanovich",
            doctor: "1",
            operations: "operation",
            diagnosis: "diagnosis",
            consultations: "consultations",
            createdAt: "2021-01-01T00:00:00.000Z",
        }
    }));

    // expect answer to be parsed user
    expect(getPatient("213")).resolves.toEqual(
        {
            id: "213",
            name: "John",
            lastName: "Doe",
            birthday: "01.01.1990",
            patronymic: "Ivanovich",
            operations: "operation",
            diagnosis: "diagnosis",
            consultations: "consultations",
            doctorId: "1",
            createdAt: "2021-01-01T00:00:00.000Z",
        });

    // expect axios to be called one time
    expect(mockAxios.get).toHaveBeenCalledTimes(1);

    // expect axios to be called with correct url
    expect(mockAxios.get).toHaveBeenCalledWith("/patients/213");
})