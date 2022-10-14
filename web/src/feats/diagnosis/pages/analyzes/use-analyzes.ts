import { useState } from "react";
import { Prediction } from "@feats/diagnosis/entities";
import { decipherAnalyses } from "@api/decipher-analyses";

export function useAnalyzes() {
    const [file, setFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)
    const [predictions, setPredictions] = useState<Prediction[]>([])

    return {
        file,
        loading,
        predictions,
        onPick: (files: File[]) => {
            if (files.length >= 1) {
                // check that file is csv
                if (files[0].type === "text/csv") {
                    setFile(files[0])
                }
            }
        },
        handleButtonClick: async () => {
            setLoading(true)
            setPredictions(await decipherAnalyses(file!));
            setLoading(false);
        },
        clearFile: () => setFile(null),
    }

}