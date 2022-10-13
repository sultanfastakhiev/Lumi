// @ts-ignore

export const breakpoints = {
    xs: [0, 575],
    sm: [576, 767],
    md: [768, 991],
    lg: [992, 1199],
    xl: [1200, 1399],
    xxl: [1399, Infinity],
}

export type Breakpoint = keyof typeof breakpoints


/**
 * return current screen size
 * @return `xs`, `sm`, `md`, `lg`, `xl` or `xxl`
 */
export function getScreenSize(): Breakpoint {
    const width = window.innerWidth
    for (let [size, [from, to]] of Object.entries(breakpoints)) {
        if (from <= width && width <= to) return size as Breakpoint
    }
    return "lg"
}

export const mobileBreakpoints: Breakpoint[] = ["xs", "sm"]

/**
 * @return true if {@link breakpoint} is `xs` or `sm`
 */
export function isMobile(breakpoint: Breakpoint) {
    return mobileBreakpoints.includes(breakpoint)
}

