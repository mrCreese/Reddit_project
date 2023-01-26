import subredditsReducer, {
    fetchSubreddits,
} from '../../slicers/subredditsSlice';

global.fetch = jest.fn();

const dataSubreddits = {
    data: {
        children: [
            {
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
            },
        ],
    },
};

const subreddits = [
    {
        bannerImg:
            'https://b.thumbs.redditmedia.com/PXt8GnqdYu-9lgzb3iesJBLN21bXExRV1A45zdw4sYE.png',
        description:
            'r/AskReddit is the place to ask and answer thought-provoking questions.',
        icon: 'https://b.thumbs.redditmedia.com/EndDxMGB-FTZ2MGtjepQ06cQEkZw_YQAsOUudpb9nSQ.png',
        subreddit: 'r/AskReddit',
        subscribers: 39499223,
        title: 'Ask Reddit...',
        url: '/r/AskReddit/',
    },
];

describe('subredditsThunk', () => {
    test('should fetchSubreddits with resolved responce', async () => {
        fetch.mockResolvedValue({
            ok: true,
            json: () => Promise.resolve(dataSubreddits),
        });

        const dispatch = jest.fn();
        const thunk = fetchSubreddits();

        await thunk(dispatch);

        const { calls } = dispatch.mock;
        const [start, end] = calls;
        const {
            bannerImg,
            description,
            icon,
            subreddit,
            subscribers,
            title,
            url,
        } = end[0].payload[0];

        expect(calls).toHaveLength(2);
        expect(start[0].type).toBe('subreddits/fetchSubreddits/pending');
        expect(end[0].type).toBe('subreddits/fetchSubreddits/fulfilled');
        expect(end[0].payload).toEqual(subreddits);
        expect(bannerImg).toBe(
            'https://b.thumbs.redditmedia.com/PXt8GnqdYu-9lgzb3iesJBLN21bXExRV1A45zdw4sYE.png'
        );
        expect(description).toBe(
            'r/AskReddit is the place to ask and answer thought-provoking questions.'
        );
        expect(icon).toBe(
            'https://b.thumbs.redditmedia.com/EndDxMGB-FTZ2MGtjepQ06cQEkZw_YQAsOUudpb9nSQ.png'
        );
        expect(subreddit).toBe('r/AskReddit');
        expect(subscribers).toBe(39499223);
        expect(title).toBe('Ask Reddit...');
        expect(url).toEqual('/r/AskReddit/');
    });

    test('should fetchSubreddits with rejected responce', async () => {
        fetch.mockResolvedValue({
            ok: false,
        });

        const dispatch = jest.fn();
        const thunk = fetchSubreddits();

        await thunk(dispatch, () => ({}));

        const { calls } = dispatch.mock;
        const [start, end] = calls;

        expect(calls).toHaveLength(2);
        expect(start[0].type).toBe('subreddits/fetchSubreddits/pending');
        expect(end[0].type).toBe('subreddits/fetchSubreddits/rejected');
        expect(end[0].meta.rejectedWithValue).toBe(true);
        expect(end[0].payload).toEqual('Server Error!');
    });
});

const initialState = {
    subreddits: [],
    status: null,
    error: null,
};

describe('subredditsSlice', () => {
    test('should change status with "fetchSubreddits.pending" action', () => {
        const state = subredditsReducer(
            initialState,
            fetchSubreddits.pending()
        );

        expect(state.status).toBe('loading');
        expect(state.error).toBeNull();
    });
    test('should fetch subreddits with "fetchSubreddits.resolved" action', () => {
        const state = subredditsReducer(
            initialState,
            fetchSubreddits.fulfilled(dataSubreddits)
        );

        expect(state).toEqual({
            subreddits: dataSubreddits,
            status: 'resolved',
            error: null,
        });
    });
    test('should change status with "fetchSubreddits.rejected" action', () => {
        const state = subredditsReducer(
            initialState,
            fetchSubreddits.rejected('Server Error!')
        );

        expect(state).toEqual({
            subreddits: [],
            status: 'failed',
            error: 'Server Error!',
        });
    });
});
