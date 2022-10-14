import { useState } from "react";
import { Prediction } from "@feats/diagnosis/entities";

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
        handleButtonClick: () => {
            setLoading(true)
            setTimeout(() => {
                setLoading(false);
                setPredictions([
                    {label: "Глиома", probability: 0.9},
                    {label: "Менингиома", probability: 0.1},
                    {label: "Здоров", probability: 0.1},
                    {label: "Гипофизная опухоль", probability: 0.1},
                ]);
            }, 2000)
        },
        clearFile: () => setFile(null),
    }
}