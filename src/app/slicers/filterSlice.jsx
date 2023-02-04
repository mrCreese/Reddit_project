import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        selectedFilter: 'hot',
    },
    reducers: {
        changeFilter: (state, action) => {
            state.selectedFilter = action.payload.nameOfFilter;
        },
    },
});

export const selectFilter = (state) => state.filter.selectedFilter;

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
