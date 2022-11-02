import { Prediction } from "@feats/diagnosis/entities";
import { client } from "@core/utils";
import { sortPredictions } from "@core/utils";

const translate = {
    "glioma": "Глиома",
    "meningioma": "Менингиома",
    "no tumor": "Здоров",
    "p tumor": "Гипофизная опухоль",
}

/**
 * Calling POST /brain endpoint to predict brain cancer by patient MRI
 * @param file patient MRI (jpg, jpeg)
 * @returns {Prediction[]} prediction
 */
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

    return sortPredictions(predictions);
}