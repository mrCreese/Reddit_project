import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectFilter } from '../../app/features/filterSlice';
import { allPosts, fetchPosts } from '../../app/features/postsSlice';
import Post from '../post/Post';


const Posts = () => {
    const dispatch = useDispatch();
    const { subreddit } = useParams();
    const filter = useSelector(selectFilter);
    const posts = useSelector(allPosts)


    useEffect(() => {
        const payload = { filter, subreddit: subreddit ? subreddit : 'popular' }
        dispatch(fetchPosts(payload))
    }, [subreddit, dispatch,filter])

    return (
        <div>
            {posts.map(post => <Post key={post.id} {...post} />)}
        </div>
    )
}

export default Posts