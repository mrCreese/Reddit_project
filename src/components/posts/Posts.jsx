import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectFilter } from '../../app/features/filterSlice';
import { allPosts, fetchPosts, fetchPostsBySearchPosts } from '../../app/features/postsSlice';
import { changeSearchTerm, selectSearchTerm } from '../../app/features/searchTermSlice';
import Post from '../post/Post';


const Posts = () => {
    const dispatch = useDispatch();
    const { subreddit } = useParams();
    const filter = useSelector(selectFilter);
    const posts = useSelector(allPosts);
    const url = useParams();
    const searchTerm = useSelector(selectSearchTerm);

    useEffect(() => {
        const payload = { filter, subreddit: subreddit ? subreddit : 'popular' };
        if (!url.searchTerm) {
            dispatch(fetchPosts(payload));
            dispatch(changeSearchTerm({ searchTerm: '' }));
        } else {
            dispatch(fetchPostsBySearchPosts(searchTerm));
        }
    }, [dispatch, filter, subreddit, searchTerm, url]);

    return (
        <div>
            {posts.map(post => <Post key={post.id} {...post} />)}
        </div>
    )

}
export default Posts