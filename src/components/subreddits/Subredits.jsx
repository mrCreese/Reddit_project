import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { AllSubreddits, fetchSubreddits } from '../../app/features/subredditsSlice';

import  './Subredits.css'

const Subredits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(AllSubreddits);


  useEffect(() => {
    dispatch(fetchSubreddits())
  }, [dispatch]);
  

  return (
    <div>
      <Link className='home' to='/'>
        <h1>Home</h1>
      </Link>
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