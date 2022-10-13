import { User } from "@feats/auth/entities";
import axios from "axios";

export async function fetchUsers(amount: number = 5): Promise<User[]> {
    const response = await axios.get(`https://randomuser.me/api/?results=${ amount }`)
    return response.data.results.map((data: any) => ({
        id: data.login.uuid,
        email: data.email,
        permissions: [],
        role: "user",
        firstName: data.name.first,
        lastName: data.name.last,
        username: data.login.username,
        profileImage: data.picture.large,
        bio: "",
        country: data.location.country,
        timezone: data.location.timezone.description,
        createdAt: new Date(),
        lastActiveAt: new Date(),
    }) as User)
}