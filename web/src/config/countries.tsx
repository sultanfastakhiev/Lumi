export const availableCountries = [
    {
        label: "England",
        value: "en",
        icon: <img src="https://cdn-icons-png.flaticon.com/512/197/197374.png" alt=""/>
    },
    {
        label: "Italy",
        value: "it",
        icon: <img src="https://cdn-icons-png.flaticon.com/512/197/197560.png" alt=""/>
    },
    {
        label: "Japan",
        value: "jp",
        icon: <img src="https://cdn-icons-png.flaticon.com/512/197/197604.png" alt=""/>
    },
    {
        label: "United states",
        value: "us",
        icon: <img src="https://cdn-icons-png.flaticon.com/512/197/197484.png" alt=""/>
    },
]

export function countryByValue(v: string | undefined) {
    if (!v) return undefined
    return availableCountries.find(x => x.value === v)
}