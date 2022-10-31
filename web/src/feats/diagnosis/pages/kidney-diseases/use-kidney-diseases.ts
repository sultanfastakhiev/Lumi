import { useImagePrediction } from "@feats/diagnosis/hooks/use-image-prediction";
import { predictKidneyDiseases } from "@api";

export function useKidneyDiseases() {
    return useImagePrediction({
        predict: predictKidneyDiseases
    })
}