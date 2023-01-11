import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectFilter } from '../../app/slicers/filterSlice';
import { fetchPosts, fetchPostsBySearchPosts } from '../../app/slicers/postsSlice';
import { changeSearchTerm, selectSearchTerm } from '../../app/slicers/searchTermSlice';
import Loading from '../Loading';
import Post from '../post/Post';


const Posts = () => {
    const dispatch = useDispatch();
    const { subreddit } = useParams();
    const filter = useSelector(selectFilter);
    const { status, error, posts } = useSelector(state => state.posts)
    const url = useParams();
    const searchTerm = useSelector(selectSearchTerm);

    useEffect(() => {
        const payload = { filter, subreddit: subreddit ? subreddit : 'popular_' };
        if (url.searchTerm) {
            dispatch(fetchPostsBySearchPosts(searchTerm));
        } else {
            dispatch(fetchPosts(payload));
            dispatch(changeSearchTerm({ searchTerm: '' }));
        }
    }, [dispatch, filter, subreddit, searchTerm, url]);

    return (
        <div>
            {status === 'loading' && <Loading />}
            {error && <h2 style={{ textAlign: 'center' }}>{error}</h2>}
            {status === 'resolved' && posts.map(post => <Post key={post.id} {...post} />)}
        </div>
    )

}
export default Posts