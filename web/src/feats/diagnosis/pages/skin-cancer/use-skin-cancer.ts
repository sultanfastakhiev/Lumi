import { useState } from "react";
import { Prediction } from "@feats/diagnosis/entities";
import { predictSkinCancer } from "@api/predict-skin-cancer";

export function useSkinCancer() {
    const [file, setFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)
    const [predictions, setPredictions] = useState<Prediction[]>([])

    return {
        file,
        loading,
        predictions,
        onPick: (files: File[]) => {
            if (files.length >= 1) {
                // check that file is jpg or jpeg
                if (files[0].type === "image/jpeg" || files[0].type === "image/jpg") {
                    setFile(files[0])
                }
            }
        },
        handleButtonClick: async () => {
            setLoading(true)
            setPredictions(await predictSkinCancer(file!))
            setLoading(false);
        },
        clearFile: () => setFile(null),
    }
}