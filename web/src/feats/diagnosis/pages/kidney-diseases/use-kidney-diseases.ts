import { useImagePrediction } from "@feats/diagnosis/hooks/use-image-prediction";
import { predictKidneyDiseases } from "@api/predict-kidney-diseases";

export function useKidneyDiseases() {
    return useImagePrediction({
        predict: predictKidneyDiseases
    })
}