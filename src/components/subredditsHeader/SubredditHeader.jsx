import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AllSubreddits } from '../../app/slicers/subredditsSlice';

import baseBg from './img/base_bg.jpg';

import './SubredditHeader.css';

const SubredditsHeader = () => {
    const subreddits = useSelector(AllSubreddits);
    const { subreddit } = useParams();
    const mySubreddit = 'r/' + subreddit;
    const selectedProps = subreddits.find(item => item.subreddit === mySubreddit)
    const { description, title, subscribers } = selectedProps;
    let bannerImg = selectedProps.bannerImg

    if (!bannerImg) {
        bannerImg = baseBg
    }

    useEffect(() => {
        let element = document.querySelector(".header");
        element.style.backgroundImage = `url(${bannerImg})`;
    }, [title, bannerImg])

    return (
        <>
            <div className='header'>
                <h1>{title}</h1>
                <p className='mySubreddit'>{mySubreddit}</p>
                <p className='subscribers'>{subscribers} subscribers</p>
            </div>
            <div className='description'>
                <h2>About comunity:</h2>
                <p>{description}</p>
            </div>
        </>
    )
}

export default SubredditsHeader