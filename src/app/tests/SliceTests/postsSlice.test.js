import postsReducer, { fetchPosts } from '../../slicers/postsSlice';

global.fetch = jest.fn();

describe('postsThunk', () => {
    test('should fetchPosts with resolved responce', async () => {
        const postData = {
            data: {
                children: [
                    {
                        data: {
                            subreddit_name_prefixed: 'r/funny',
                            author: 'funny_mod',
                            id: '100kgog',
                            num_comments: 21,
                            title: 'Subreddit of the Month [January 2023] r/ballsthatclank/. Know of a small, humor-based subreddit that deserves a month in the spotlight? Link it inside!',
                            selftext: '',
                            created_utc: 1672582257,
                            url: 'https://www.reddit.com/r/ballsthatclank.png',
                        },
                    },
                ],
            },
        };

        const post = [
            {
                author: 'funny_mod',
                subreddit: 'r/funny',
                time: '1/1/2023, 15:10:57',
                title: 'Subreddit of the Month [January 2023] r/ballsthatclank/. Know of a small, humor-based subreddit that deserves a month in the spotlight? Link it inside!',
                text: '',
                image: 'https://www.reddit.com/r/ballsthatclank.png',
                numberOfComments: 21,
                id: '100kgog',
            },
        ];

        fetch.mockResolvedValue({
            ok: true,
            json: () => Promise.resolve(postData),
        });

        const objPayload = { filter: 'hot', subreddit: 'funny' };
        const dispatch = jest.fn();
        const thunk = fetchPosts(objPayload);

        await thunk(dispatch, () => {});

        const { calls } = dispatch.mock;
        const [start, end] = calls;
        const {
            author,
            subreddit,
            time,
            title,
            text,
            image,
            numberOfComments,
            id,
        } = end[0].payload[0];

        expect(calls).toHaveLength(2);
        expect(start[0].type).toBe('posts/fetchPosts/pending');
        expect(end[0].type).toBe('posts/fetchPosts/fulfilled');
        expect(end[0].payload).toEqual(post);
        expect(author).toBe('funny_mod');
        expect(subreddit).toBe('r/funny');
        expect(time).toBe('1/1/2023, 15:10:57');
        expect(title).toBe(
            'Subreddit of the Month [January 2023] r/ballsthatclank/. Know of a small, humor-based subreddit that deserves a month in the spotlight? Link it inside!'
        );
        expect(text).toBe('');
        expect(image).toBe('https://www.reddit.com/r/ballsthatclank.png');
        expect(numberOfComments).toBe(21);
        expect(id).toBe('100kgog');
    });

    test('should fetchPosts with rejected responce', () => {});
});
