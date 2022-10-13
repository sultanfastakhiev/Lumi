import client from "@core/utils/axios";
import { parseUser, User } from "@feats/auth/entities";

export async function fetchMe(): Promise<User | null> {
    const response = await client.get("/me");
    if (response.status === 200) {
        return parseUser(response.data)
    }
    return null;
}