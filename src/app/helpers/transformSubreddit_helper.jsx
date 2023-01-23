export function transformSubreddit(subbredit) {
    const {
        banner_img,
        display_name_prefixed,
        icon_img,
        public_description,
        subscribers,
        title,
        url,
    } = subbredit.data;
    return {
        bannerImg: banner_img,
        subreddit: display_name_prefixed,
        icon: icon_img,
        description: public_description,
        subscribers,
        title,
        url,
    };
}
