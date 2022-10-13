import { v4 } from "uuid";

/**
 * Takes list of objects and return the same list, but with unique key property. 
 * Useful in UI lists
 * @param list input array
 * @return {@link} with unique id property
 */
export function populateUiListWithUniqueKeys<T>(list: (T & { key?: string })[]): (T & { key: string })[] {
    return list.map(e => {
        return ({...e, key: e.key ?? v4()});
    })
}