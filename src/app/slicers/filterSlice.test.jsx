import filterReducer, { changeFilter } from './filterSlice.jsx';

describe('filterSlice', () => {
    test('should return default state first render', () => {
        const { selectedFilter } = filterReducer(undefined, {
            type: undefined,
        });
        expect(selectedFilter).toBe('hot');
    });
    test('should return new selectedFilter', () => {
        const { selectedFilter } = filterReducer(
            undefined,
            changeFilter({ nameOfFilter: 'top' })
        );
        expect(selectedFilter).toBe('top');
    });
});
