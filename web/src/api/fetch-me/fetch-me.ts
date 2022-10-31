import client from "@core/utils/axios";
import { parseUser, User } from "@feats/auth/entities";

/**
 * Calling GET /me endpoint to fetch current user
 * @returns {User} current user
 * @throws {null} if request failed
 */
export async function fetchMe(): Promise<User | null> {
    const response = await client.get("/me");
    if (response.status === 200) {
        return parseUser(response.data)
    }
    return null;
}