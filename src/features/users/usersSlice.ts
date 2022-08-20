import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import apiService, {Abortable} from '../../app/api';

export type User = Record<string, unknown>;

export type UsersState = {
    fetchUsers: {
        data: User[];
        isLoading: boolean;
    };
};

const initialState: UsersState = {
    fetchUsers: {
        data: [],
        isLoading: false,
    },
};

const API_URL = 'users';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async ({signal}: Abortable, thunkApi) => {
    try {
        const {data} = await apiService.get<User[]>(API_URL, {signal});
        return data;
    } catch (e) {
        return thunkApi.rejectWithValue((e as Error).message);
    }
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
            .addCase(fetchUsers.fulfilled, (state, {payload}: PayloadAction<User[]>) => {
                state.fetchUsers.isLoading = false;
                state.fetchUsers.data = payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.fetchUsers.isLoading = false;
            });
    },
});

export default counterSlice.reducer;
