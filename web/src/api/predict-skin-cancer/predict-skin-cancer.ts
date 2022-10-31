import client from "@core/utils/axios";
import { Prediction } from "@feats/diagnosis/entities";
import { sortPredictions } from "@core/utils";

/**
 * Calling POST /file and passing file with user birthmark photo as FormData in order to predict skin cancer
 * @param {File} file birthmark photo (jpg or jpeg)
 */
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

    return sortPredictions(predictions);
}