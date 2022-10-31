import { Prediction } from "@feats/diagnosis/entities";
import client from "@core/utils/axios";
import { sortPredictions } from "@core/utils";

export async function predictKidneyDiseases(file: File): Promise<Prediction[]> {
    const formData = new FormData();
    formData.append('file', file);
    const response = await client.post("/test", formData);

    const predictions: Prediction[] = [
        {
            label: "Киста",
            probability: response.data.cyst / 100,
        },
        {
            label: "Здоров",
            probability: response.data.normal / 100,
        },
        {
            label: "Камень",
            probability: response.data.stone / 100,
        },
        {
            label: "Опухоль",
            probability: response.data.tumor / 100,
        },
    ]

    return sortPredictions(predictions);
}