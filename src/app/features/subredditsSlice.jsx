import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchSubreddits = createAsyncThunk(
    'subreddits/fetchSubreddits',
    async function () {
        const response = await fetch('https://www.reddit.com/subreddits.json')
        const jsonData = await response.json()
        const newSubreddits = jsonData.data.children.map((subbredit) => {
            const {
                banner_img,
                display_name_prefixed,
                icon_img,
                public_description,
                subscribers,
                title,
                url,
            } = subbredit.data
            return {
                bannerImg: banner_img,
                subreddit: display_name_prefixed,
                icon: icon_img,
                description: public_description,
                subscribers,
                title,
                url
            }
        })

        newSubreddits.shift();

        return newSubreddits;




    }
)


const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        status: 'null',
        error: null
    },
    reducers: {},
    extraReducers: {
        [fetchSubreddits.pending]: (state, action) => {
            state.status = 'loading';
        },

        [fetchSubreddits.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.subreddits = action.payload;
        },

        [fetchSubreddits.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        }
    }
})
export const AllSubreddits = (state) => state.subreddits.subreddits

export default subredditsSlice.reducer;