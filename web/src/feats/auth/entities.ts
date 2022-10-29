export type User = {
    id: string;
    name: string;
    lastName: string;
    patronymic: string;
    birthday: Date;
    username: string;
}

export function parseUser(data: any): User {
    let birthday: any = data.birthday.split(".")
    let tmp = (birthday as string[])[0];
    (birthday as string[])[0] = (birthday as string[])[1];
    (birthday as string[])[1] = tmp;
    
    
    return {
        id: data.id,
        name: data.name,
        lastName: data.last_name,
        patronymic: data.patronymic,
        username: data.username,
        birthday: birthday.join("."),
    }
} 

export type Tokens = {
    access: string,
    refresh: string,
}

export function fullName(user: User | undefined | null) {
    if (!user) return ""
    let fullName = ""
    if (user.name) fullName += user.name + " "
    if (user.lastName) fullName += user.lastName
    return fullName
}