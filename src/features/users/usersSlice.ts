import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import apiService, {Abortable} from '../../app/api';

export interface UsersState {
    fetchUsers: {
        data: Record<string, unknown>[];
        isLoading: boolean;
    };
}

const initialState: UsersState = {
    fetchUsers: {
        data: [],
        isLoading: false,
    },
};

const API_URL = 'users';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async ({signal}: Abortable) => {
    const {data} = await apiService.get<any[]>(API_URL, {signal});

    return data;
});

export const counterSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.fetchUsers.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, {payload}) => {
                state.fetchUsers.isLoading = false;
                state.fetchUsers.data = payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.fetchUsers.isLoading = false;
            });
    },
});

export default counterSlice.reducer;
