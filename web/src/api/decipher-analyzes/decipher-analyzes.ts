import client from "@core/utils/axios";
import { Prediction } from "@feats/diagnosis/entities";
import { sortPredictions } from "@core/utils";

/**
 * Calling POST /test_an to get the prediction of the analysis
 * @param {File} file the csv analysis file to send
 * @returns {Prediction[]} the prediction of the analysis
 */
export async function decipherAnalyzes(file: File): Promise<Prediction[]> {
    const formData = new FormData();
    formData.append('file_in', file);
    const response = await client.post("/test_an", formData);

    const predictions = (response.data["predict"] as any[]).map(e => {
        return {
            label: e.title,
            probability: e.value / 100,
        }
    })

    return sortPredictions(predictions);
} 