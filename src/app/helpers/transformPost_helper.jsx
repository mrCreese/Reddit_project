import { calculateData } from './date_helpers.jsx';

export function transformPost(post) {
    const {
        subreddit_name_prefixed,
        author,
        id,
        num_comments,
        title,
        selftext,
    } = post.data;
    let postImage =
        (post.data.url.includes('.jpg') || post.data.url.includes('.png')) &&
        post.data.url;
    if (!postImage) postImage = null;

    const timestamp = post.data.created_utc;
    const time = calculateData(timestamp);
    return {
        author,
        subreddit: subreddit_name_prefixed,
        time,
        title,
        text: selftext,
        image: postImage,
        numberOfComments: num_comments,
        id,
    };
}
