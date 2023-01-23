import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        selectedFilter: 'hot',
    },
    reducers: {
        changeFilter: (state, action) => {
            const { nameOfFilter } = action.payload;
            state.selectedFilter = nameOfFilter;
        },
    },
});

export const selectFilter = (state) => state.filter.selectedFilter;

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
