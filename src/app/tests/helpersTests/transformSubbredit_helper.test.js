import { transformSubreddit } from '../../helpers/transformSubreddit_helper';

const dataSubreddit = {
    data: {
        banner_img:
            'https://b.thumbs.redditmedia.com/PXt8GnqdYu-9lgzb3iesJBLN21bXExRV1A45zdw4sYE.png',
        public_description:
            'r/AskReddit is the place to ask and answer thought-provoking questions.',
        icon_img:
            'https://b.thumbs.redditmedia.com/EndDxMGB-FTZ2MGtjepQ06cQEkZw_YQAsOUudpb9nSQ.png',
        display_name_prefixed: 'r/AskReddit',
        subscribers: 39499223,
        title: 'Ask Reddit...',
        url: '/r/AskReddit/',
    },
};
const subreddit = {
    bannerImg:
        'https://b.thumbs.redditmedia.com/PXt8GnqdYu-9lgzb3iesJBLN21bXExRV1A45zdw4sYE.png',
    description:
        'r/AskReddit is the place to ask and answer thought-provoking questions.',
    icon: 'https://b.thumbs.redditmedia.com/EndDxMGB-FTZ2MGtjepQ06cQEkZw_YQAsOUudpb9nSQ.png',
    subreddit: 'r/AskReddit',
    subscribers: 39499223,
    title: 'Ask Reddit...',
    url: '/r/AskReddit/',
};

describe('subbredit', () => {
    test('create subbredit object', () => {
        const result = transformSubreddit(dataSubreddit);
        expect(result).toEqual(subreddit);
    });
});
