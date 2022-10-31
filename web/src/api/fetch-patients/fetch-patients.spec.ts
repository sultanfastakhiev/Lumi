import axios from "axios";
import {fetchPatients  } from "@api";

const mockAxios = axios as jest.Mocked<typeof axios>;

it('should fetch patients', function () {
    // Mocking the axios client
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        status: 200,
        data: {
            result: [
                {
                    name: "John",
                    lastName: "Doe",
                    birthday: "01.01.1990",
                    patronymic: "Ivanovich",
                    doctorId: "1",
                    operations: "operation",
                    diagnosis: "diagnosis",
                    consultations: "consultations",
                },
                {
                    name: "Mike",
                    lastName: "Adams",
                    birthday: "21.05.1994",
                    patronymic: "Ivanovich",
                    doctorId: "1",
                    operations: "operation2",
                    diagnosis: "diagnosis2",
                    consultations: "consultations2",
                }
            ]
        }
    }));
    
    // expect answer to be parsed user
    expect(fetchPatients()).resolves.toEqual([
        {
            name: "John",
            lastName: "Doe",
            birthday: "01.01.1990",
            patronymic: "Ivanovich",
            doctorId: "1",
            operations: "operation",
            diagnosis: "diagnosis",
            consultations: "consultations",
        },
        {
            name: "Mike",
            lastName: "Adams",
            birthday: "21.05.1994",
            patronymic: "Ivanovich",
            doctorId: "1",
            operations: "operation2",
            diagnosis: "diagnosis2",
            consultations: "consultations2",
        }
    ]);
    
    // expect axios to be called one time
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    
    // expect axios to be called with correct url
    expect(mockAxios.get).toHaveBeenCalledWith("/patients");
})