import axios from "axios";
import { createPatient } from "@api";

const mockAxios = axios as jest.Mocked<typeof axios>;

it("should create patient", function () {
    // Mocking the axios client
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({status: 200}));

    // expect answer to be true
    expect(createPatient({
        name: "John",
        lastName: "Doe",
        birthday: "1990-01-01",
        patronymic: "Ivanovich",
        doctorId: "1",
        operations: "operation",
        diagnosis: "diagnosis",
        consultations: "consultations",
    })).resolves.toEqual(true);

    // expect one call
    expect(mockAxios.post).toHaveBeenCalledTimes(1);

    // expect correct passed arguments to the axios client
    expect(mockAxios.post).toHaveBeenCalledWith("/patients/create_patient", {
        name: "John",
        last_name: "Doe",
        birthday: "01.01.1990",
        patronymic: "Ivanovich",
        doctorId: "1",
        operations: "operation",
        diagnosis: "diagnosis",
        consultations: "consultations",
    });
});

it('should return false if error happened', function () {
    // Mocking the axios client
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({status: 400}));

    // expect answer to be true
    expect(createPatient({
        name: "John",
        lastName: "Doe",
        birthday: "1990-01-01",
        patronymic: "Ivanovich",
        doctorId: "1",
        operations: "operation",
        diagnosis: "diagnosis",
        consultations: "consultations",
    })).resolves.toEqual(false);
}); 