import client from "@core/utils/axios";
import { Prediction } from "@feats/diagnosis/entities";

export async function decipherAnalyses(file: File): Promise<Prediction[]> {
    const formData = new FormData();
    formData.append('file_in', file);
    const response = await client.post("/test_an", formData);

    const predictions = (response.data["predict"] as any[]).map(e => {
        return {
            label: e.title,
            probability: e.value / 100,
        }
    })

    return predictions.sort(
        (a, b) => b.probability - a.probability
    );
} 