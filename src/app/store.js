import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from './slicers/subredditsSlice';
import postsReducer from './slicers/postsSlice';
import filterReducer from './slicers/filterSlice';
import searchReducer from './slicers/searchTermSlice';

export const store = configureStore({
    reducer: {
        subreddits: subredditsReducer,
        posts: postsReducer,
        filter: filterReducer,
        search: searchReducer
    },
});
