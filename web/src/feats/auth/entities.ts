import { formatDate } from "@core/utils/fomatters/date-formatter";

export type Permission = "dashboard" | "test"

export type User = {
    id: string;
    email: string,
    permissions: Permission[],
    role: string,
    firstName?: string,
    lastName?: string,
    username?: string,
    profileImage?: string,
    bio?: string,
    country?: string,
    timezone?: string,
    createdAt: Date,
    lastActiveAt: Date,
}

export type Tokens = {
    access: string,
    refresh: string,
}

export function fullName(user: User | undefined | null) {
    if (!user) return ""
    let fullName = ""
    if (user.firstName) fullName += user.firstName + " "
    if (user.lastName) fullName += user.lastName
    return fullName
}

export function formatCreatedAt(user: User | undefined | null): string {
    if (!user) return ""
    if (!user.createdAt) return ""
    return formatDate(user.createdAt);
}

export function formatLastActiveAt(user: User | undefined | null): string {
    if (!user) return ""
    if (!user.lastActiveAt) return ""
    return formatDate(user.lastActiveAt);
}