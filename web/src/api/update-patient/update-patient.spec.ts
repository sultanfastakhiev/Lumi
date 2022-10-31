import axios from "axios";
import { updatePatient } from "@api";

const mockAxios = axios as jest.Mocked<typeof axios>;

it("should update patient", function () {
    // Mocking the axios client
    mockAxios.patch.mockImplementationOnce(() => Promise.resolve({status: 200}));
    
    // expect answer to be undefined
    expect(updatePatient({
        id: "1",
        name: "John",
        lastName: "Doe",
        birthday: "1990-01-01",
        patronymic: "Ivanovich",
        operations: "123",
        diagnosis: "12333",
        consultations: "2222"
    })).resolves.toEqual(true);
    
    // expect one call
    expect(mockAxios.patch).toHaveBeenCalledTimes(1);
    
    // expect correct passed arguments to the axios client
    expect(mockAxios.patch).toHaveBeenCalledWith("/patients/1", {
        id: "1",
        name: "John",
        last_name: "Doe",
        birthday: "01.01.1990",
        patronymic: "Ivanovich",
        operations: "123",
        diagnosis: "12333",
        consultations: "2222"
    });
})

it('should use null for consultations, diagnosis and operations if empty', function () {
    // Mocking the axios client
    mockAxios.patch.mockImplementationOnce(() => Promise.resolve({status: 200}));
    
    // expect answer to be true
    expect(updatePatient({
        id: "1",
        name: "John",
        lastName: "Doe",
        birthday: "1990-01-01",
        patronymic: "Ivanovich",
        operations: "",
        diagnosis: "",
        consultations: ""
    })).resolves.toEqual(true);
    
    // expect correct passed arguments to the axios client
    expect(mockAxios.patch).toHaveBeenCalledWith("/patients/1", {
        id: "1",
        name: "John",
        last_name: "Doe",
        birthday: "01.01.1990",
        patronymic: "Ivanovich",
        operations: null,
        diagnosis: null,
        consultations: null
    });
});

it('should return false if error happened', function () {
    // Mocking the axios client
    mockAxios.patch.mockImplementationOnce(() => Promise.resolve({status: 400}));
    
    // expect answer to be true
    expect(updatePatient({
        id: "1",
        name: "John",
        lastName: "Doe",
        birthday: "1990-01-01",
        patronymic: "Ivanovich",
        operations: "2",
        diagnosis: "3",
        consultations: "1"
    })).resolves.toEqual(false);
})