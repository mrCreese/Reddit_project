export const fetchForm = async (url, func, { rejectWithValue }) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Server Error!');
        }
        const jsonData = await response.json();
        return func(jsonData);
    } catch (error) {
        return rejectWithValue(error.message);
    }
};
