import client from "@core/utils/axios";

export async function checkUsernameUniqueness(username: string): Promise<boolean> {
    const response = await client.post("/check_username", {username})
    return response.data.answer ?? false;
}
