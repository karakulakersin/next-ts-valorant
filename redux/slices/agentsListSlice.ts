import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    agents: [],
    loading: false,
    error: '',
}
// First, create the thunk
export const fetchAgents = createAsyncThunk('fetchAgents', async() => {
    const response = await axios.get(process.env.NEXT_PUBLIC_API as string)
    return response.data
})


const agentsListSlice = createSlice({
    name: 'agents',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchAgents.pending,(state,action) => {
            state.loading = true;
            state.error = ''
        })
        builder.addCase(fetchAgents.fulfilled,(state,action) => {
            state.agents = action.payload
            state.loading = false;
        })
        builder.addCase(fetchAgents.rejected,(state,action) => {
            state.loading = false;
            state.error = 'Bir hata oluştu!'
        })
    }
})

export default agentsListSlice.reducer;
