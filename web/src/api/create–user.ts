import client from "@core/utils/axios";
import { SignupArgs } from "@feats/auth/redux/auth/auth-actions";

export async function createUser(values: SignupArgs): Promise<string | undefined> {
    const response = await client.post(
        "/reg",
        {
            "last_name": values.lastName,
            "name": values.name,
            "patronymic": values.patronymic,
            "birthday": values.birthday,
            "username": values.username,
            "password_hash": values.password
        }
    )
    if (response.status !== 200) {
        return "Не удалось создать пользователя"
    }
}