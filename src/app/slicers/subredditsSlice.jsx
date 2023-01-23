import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { transformSubreddit } from '../helpers/transformSubreddit_helper.jsx';
import { fetchForm } from '../helpers/fetchForm_helper.jsx';

export function createSubreddits(param) {
    const newPosts = param.data.children.map((subreddit) =>
        transformSubreddit(subreddit)
    );
    return newPosts;
}
export const fetchSubreddits = createAsyncThunk(
    'subreddits/fetchSubreddits',
    async function (_, rejectWithValue) {
        return await fetchForm(
            'https://www.reddit.com/subreddits.json',
            createSubreddits,
            rejectWithValue
        );
    }
);

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchSubreddits.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchSubreddits.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.subreddits = action.payload;
        },

        [fetchSubreddits.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});
export const AllSubreddits = (state) => state.subreddits.subreddits;

export default subredditsSlice.reducer;
