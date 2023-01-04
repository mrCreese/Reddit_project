import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { calcTime } from "../helpers/helps";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (payload) => {
        const { filter, subreddit } = payload;
        console.log(`https://www.reddit.com/r/${subreddit}/${filter}.json`)
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/${filter}.json`);
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
                author:author,
                subreddit:subreddit_name_prefixed,
                time:time,
                title:title,
                text: postText,
                image: postImage,
                numberOfComments:num_comments,
                id:id
            }
        });
        return newPosts;
        
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'null',
        error: null
    },
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.status = 'loading';
        },

        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.posts = action.payload;
        },

        [fetchPosts.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        },
    }
})

export const allPosts = (state) => state.posts.posts;
export default postsSlice.reducer;