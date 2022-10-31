import client from "@core/utils/axios";

/**
 * Calling POST /check_username_uniqueness endpoint to check is received username unique or not
 * @param username username which should be checked
 * @return true if username is unique and false if username is not unique
 */
export async function checkUsernameUniqueness(username: string): Promise<boolean> {
    const response = await client.post("/check_username", {username})
    return response.data.answer ?? false;
}
