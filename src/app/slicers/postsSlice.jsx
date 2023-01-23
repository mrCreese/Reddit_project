import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { transformPost } from '../helpers/transformPost_helper';
import { fetchForm } from '../helpers/fetchForm_helper';

export function createPostsObject(param) {
    const newPosts = param.data.children.map((post) => transformPost(post));
    return newPosts;
}

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (payload, rejectValue) => {
        const { filter, subreddit } = payload;
        return await fetchForm(
            `https://www.reddit.com/r/${subreddit}/${filter}.json`,
            createPostsObject,
            rejectValue
        );
    }
);

export const fetchPostsBySearchPosts = createAsyncThunk(
    'posts/fetchPostsBySearchPosts',
    async (searchTerm, rejectValue) => {
        return await fetchForm(
            `https://www.reddit.com/search.json?q=${searchTerm}`,
            rejectValue
        );
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [fetchPostsBySearchPosts.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchPostsBySearchPosts.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.posts = action.payload;
        },
        [fetchPostsBySearchPosts.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    },
});

export default postsSlice.reducer;
