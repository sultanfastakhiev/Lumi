import { predictSkinCancer } from "@api";
import { useImagePrediction } from "@feats/diagnosis/hooks/use-image-prediction";

export function useSkinCancer() {
   return useImagePrediction({
       predict: predictSkinCancer
   })
}