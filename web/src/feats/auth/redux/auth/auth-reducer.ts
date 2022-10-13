import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "@feats/auth/redux/auth/auth-state";
import { login, updateUser } from "@feats/auth/redux/auth/auth-actions";
import LocalStorage from "@core/services/local-storage";
import AuthService from "@feats/auth/auth-service";

const slice = createSlice({
    name: "auth",
    initialState: (): AuthState => {
        const user = LocalStorage.user
        if (user) {
            return {type: "authorized", user}
        }

        return {type: "not-authorized"}
    },
    reducers: {
        logout: (_state, _action: PayloadAction<void>) => {
            AuthService.logout()
            return {type: "not-authorized"}
        }
    },
    extraReducers: builder => builder
        .addCase(login.fulfilled, (_, action) => action.payload)
        .addCase(updateUser.fulfilled, (_, action) => action.payload)
})

export const {logout} = slice.actions

export default slice.reducer