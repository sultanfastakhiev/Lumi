import client from "@core/utils/axios";
import { SignupArgs } from "@feats/auth/redux/auth/auth-actions";
import { formatInputDate } from "@core/utils/formatters/date-formatter/date-formatter";

/**
 * Calling POST /reg endpoint to create user (doctor)
 * @param {SignupArgs} values payload of doctor which should be created
 * @return undefined on success and error message on failure
 */
export async function createUser(values: SignupArgs): Promise<string | undefined> {
    const response = await client.post(
        "/reg",
        {
            "last_name": values.lastName,
            "name": values.name,
            "patronymic": values.patronymic,
            "birthday": formatInputDate(values.birthday),
            "username": values.username,
            "password_hash": values.password
        }
    )
    
    if (response.status !== 200) {
        return "Не удалось создать пользователя"
    }
}