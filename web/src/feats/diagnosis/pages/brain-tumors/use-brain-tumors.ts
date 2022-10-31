import { useImagePrediction } from "@feats/diagnosis/hooks/use-image-prediction";
import { predictBrainCancer } from "@api";

export function useBrainTumors() {
    return useImagePrediction({
        predict: predictBrainCancer
    })
}