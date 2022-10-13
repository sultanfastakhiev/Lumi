import client from "@core/utils/axios";

export async function authorize(username: string, password: string): Promise<string | null> {
    const response = await client.post("/", {
        username: username,
        password_hash: password,
    });
    if (response.status === 200) return response.data.access_token;
    return null
}