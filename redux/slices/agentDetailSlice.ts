import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState: any = {
    data: [],
    loading: false,
    error: ''
}
export const fetchAgentDetail = createAsyncThunk('fetchAgentDetail', async(uuid:string) => {
    const response = await axios.get(process.env.NEXT_PUBLIC_API + '/' + uuid,{
        params:{
            language:process.env.NEXT_PUBLIC_LANG
        }})
    return response.data
})

const agentDetailSlice = createSlice({
    name: 'detail',
    initialState: initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchAgentDetail.pending,(state,action) => {
            state.loading = true;
            state.error = ''
        })
        builder.addCase(fetchAgentDetail.fulfilled,(state,action) => {
            state.loading = false;
            state.data = action.payload
        })
        builder.addCase(fetchAgentDetail.rejected,(state,action) => {
            state.loading = false;
            state.error = 'Bir hata oluştu!'
        })
    }
})
export default agentDetailSlice.reducer;
