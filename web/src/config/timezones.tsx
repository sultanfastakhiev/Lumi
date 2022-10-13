export const timezones = [
    {
        label: "Pacific Standard Time (PST)",
        supportText: "UTC−08:00",
        value: "pst",
    },
    {
        label: "Mountain Standard Time (MST)",
        supportText: "UTC−07:00",
        value: "mst",
    },
    {
        label: "Central Standard Time (CST)",
        supportText: "UTC−06:00",
        value: "cst",
    },
]

export function timezoneByValue(v: string | undefined) {
    if (!v) return undefined
    return timezones.find(x => x.value === v)
}