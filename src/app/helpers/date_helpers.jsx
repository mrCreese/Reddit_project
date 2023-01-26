export function calculateData(timestamp) {
    const data = new Date(timestamp * 1000);
    return data.toLocaleString();
}
