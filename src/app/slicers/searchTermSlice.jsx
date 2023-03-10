import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: '',
    },
    reducers: {
        changeSearchTerm: (state, action) => {
            const { searchTerm } = action.payload;
            state.searchTerm = searchTerm;
        },
    },
});

export const selectSearchTerm = (state) => state.search.searchTerm;

export const { changeSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
