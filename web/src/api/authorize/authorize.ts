import { client } from "@core/utils";

/**
 * Calling POST / endpoint to authorize user using username and password and returns access_token
 * @param username username of the user
 * @param password password of the user
 * @return access token on success authorization and null on failure
 */
export async function authorize(username: string, password: string): Promise<string | null> {
    const response = await client.post("/", {
        username: username,
        password_hash: password,
    });
    if (response.status === 200) return response.data.access_token;
    return null
}