import searchReducer, { changeSearchTerm } from '../../slicers/searchTermSlice';

describe('searchSlice', () => {
    test('should return default state', () => {
        const { searchTerm } = searchReducer(undefined, {
            type: undefined,
        });

        expect(searchTerm).toBe('');
    });

    test('should return new search value', () => {
        const { searchTerm } = searchReducer(
            undefined,
            changeSearchTerm({ searchTerm: 'magic' })
        );

        expect(searchTerm).toBe('magic');
    });
});
