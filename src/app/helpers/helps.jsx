export function calcTime(timestamp) {
    let data = ((new Date(timestamp * 1000)) + '').split(' ');
    return `${data[2]}.${data[1]}.${data[3]} ${data[4]}`

};
export function postObject(param) {
    const newPosts = param.data.children.map((post) => {
        const { subreddit_name_prefixed, author, id, num_comments, title, selftext } = post.data;
        let postImage = (post.data.url.includes('.jpg') || post.data.url.includes('.png')) && post.data.url;
        if (!postImage) postImage = null;

        const timestamp = post.data.created_utc;
        const time = calcTime(timestamp);
        return {
            author,
            subreddit: subreddit_name_prefixed,
            time,
            title,
            text: selftext,
            image: postImage,
            numberOfComments: num_comments,
            id
        }
    });
    return newPosts;
}