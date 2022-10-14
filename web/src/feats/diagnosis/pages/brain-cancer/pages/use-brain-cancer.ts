import { useImagePrediction } from "@feats/diagnosis/hooks/use-image-prediction";
import { predictBrainCancer } from "@api/predict-brain-cancer";

export function useBrainCancer() {
    return useImagePrediction({
        predict: predictBrainCancer
    })
}