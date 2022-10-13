import {Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit";

// Reducers
import coreReducers from "core/redux"
import authReducer from "@feats/auth/redux/auth/auth-reducer";

const rootReducer = combineReducers({
    ...coreReducers,
    auth: authReducer,
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;