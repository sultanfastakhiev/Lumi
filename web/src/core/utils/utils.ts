import { Prediction } from "@feats/diagnosis/entities";

export const isServer = () => typeof window === "undefined"

export const isClient = () => typeof window !== "undefined"

// Function which takes a date string 21.11.2005 and flip first and second parts of it 11.21.2005
export const flipDate = (date: string) => {
    const parts = date.split(".")
    return `${parts[1]}.${parts[0]}.${parts[2]}`
}

/**
 * Function which takes array of predictions and returns array with sorted predictions
 * @param {Prediction[]} predictions array of predictions
 * @returns {Prediction[]} array of sorted predictions
 */
export function sortPredictions(predictions: Prediction[]) {
    return predictions.sort((a, b) => b.probability - a.probability)
}