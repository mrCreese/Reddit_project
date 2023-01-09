import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { calcTime } from "../helpers/helps";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (payload, { rejectWithValue }) => {
        const { filter, subreddit } = payload;

        try {
            const response = await fetch(`https://www.reddit.com/r/${subreddit}/${filter}.json`);
            if (!response.ok) {
                throw new Error('Server Error!');
            }
            const jsonData = await response.json();
            const newPosts = jsonData.data.children.map((post) => {
                const { subreddit_name_prefixed, author, id, num_comments, title } = post.data;
                const postText = post.data.selftext ? post.data.selftext : null;
                let postImage = post.data.url;
                if (postImage.includes('.jpg') || postImage.includes('.png')) {
                } else {
                    postImage = null;
                };
                const timestamp = post.data.created_utc;
                const time = calcTime(timestamp);
                return {
                    author: author,
                    subreddit: subreddit_name_prefixed,
                    time: time,
                    title: title,
                    text: postText,
                    image: postImage,
                    numberOfComments: num_comments,
                    id: id
                }
            });
            return newPosts;
        } catch (error) {
            return rejectWithValue(error.message);
        }


    }
);

export const fetchPostsBySearchPosts = createAsyncThunk(
    'posts/fetchPostsBySearchPosts',
    async (searchTerm, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}`);
            if (!response.ok) {
                throw new Error('Not found!');
            }
            const jsonData = await response.json();
            const newPosts = jsonData.data.children.map((post) => {
                const { subreddit_name_prefixed, author, id, num_comments, title } = post.data;
                const postText = post.data.selftext ? post.data.selftext : null;
                let postImage = post.data.url;
                if (postImage.includes('.jpg') || postImage.includes('.png')) {
                } else {
                    postImage = null;
                };
                const timestamp = post.data.created_utc;
                const time = calcTime(timestamp);
                return {
                    author: author,
                    subreddit: subreddit_name_prefixed,
                    time: time,
                    title: title,
                    text: postText,
                    image: postImage,
                    numberOfComments: num_comments,
                    id: id
                }
            });
            return newPosts;
        } catch (error) {
            return rejectWithValue(error.message);
        }


    }

)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: null,
        error: null
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
        }
    }
})

export default postsSlice.reducer;