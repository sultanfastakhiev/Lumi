import { predictSkinCancer } from "@api/predict-skin-cancer";
import { useImagePrediction } from "@feats/diagnosis/hooks/use-image-prediction";

export function useSkinCancer() {
   return useImagePrediction({
       predict: predictSkinCancer
   })
}