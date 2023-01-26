import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { fetchSubreddits } from '../../app/slicers/subredditsSlice';
import Loading from '../Loading';

import './Subredits.css'

const Subredits = () => {
    const dispatch = useDispatch();
    const { subreddits, status } = useSelector(state => state.subreddits)


    useEffect(() => {
        dispatch(fetchSubreddits())
    }, [dispatch]);


    return (
        <div>
            <Link className='home' to='/'>
                <h1>Home</h1>
            </Link>
            {status === 'loading' && <Loading />}
            {subreddits.map((subreddit, id) => {
                return (
                    <div className='links' key={id}>
                        <NavLink
                            to={`/${subreddit.subreddit}`}

                        >
                            {subreddit.subreddit}
                        </NavLink>
                    </div>)
            })
            }
        </div>


    )
}

export default Subredits