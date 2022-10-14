import client from "@core/utils/axios";
import { Prediction } from "@feats/diagnosis/entities";

export async function predictSkinCancer(file: File): Promise<Prediction[]> {
    const formData = new FormData();
    formData.append('file_mel', file);
    const response = await client.post("/melanoma", formData);

    const predictions = (response.data["Predict"] as any[]).map(e => {
        return {
            label: e.title === "melanoma" ? "Меланома" : "Здоров",
            probability: e.value / 100,
        }
    })

    return predictions.sort(
        (a, b) => b.probability - a.probability
    );
}