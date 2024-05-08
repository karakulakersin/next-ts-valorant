import { configureStore } from "@reduxjs/toolkit";
import agentsListSlice from "./slices/agentsListSlice";
import agentDetailSlice from "./slices/agentDetailSlice";

export const store = configureStore({
    reducer: {
        agentsList: agentsListSlice,
        agentDetail: agentDetailSlice
    }
})