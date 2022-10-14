import { Prediction } from "@feats/diagnosis/entities";
import client from "@core/utils/axios";

const translate = {
    "glioma": "Глиома",
    "meningioma": "Менингиома",
    "no tumor": "Здоров",
    "p tumor": "Гипофизная опухоль",
}

export async function predictBrainCancer(file: File): Promise<Prediction[]> {
    const formData = new FormData();
    formData.append('file_mel', file);
    const response = await client.post("/brain", formData);

    const predictions = (response.data["Predict"] as any[]).map(e => {
        return {
            label: translate[e.title as keyof typeof translate],
            probability: e.value / 100,
        }
    })

    return predictions.sort(
        (a, b) => b.probability - a.probability
    );
}