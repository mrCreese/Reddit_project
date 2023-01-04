import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer  from './features/subredditsSlice';
import postsReducer  from './features/postsSlice';
import filterReducer  from './features/filterSlice';

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    posts: postsReducer,
    filter: filterReducer
  },
});
