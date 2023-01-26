export function calculateData(timestamp) {
    /*    let data = (new Date(timestamp * 1000) + '').split(' ');
    return `${data[2]}.${data[1]}.${data[3]} ${data[4]}`; */
    const data = new Date(timestamp * 1000);
    return data.toLocaleString();
}
