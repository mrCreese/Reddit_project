import React from 'react';
import './Post.css'

const Post = ({
    author,
    subreddit,
    time,
    title,
    text,
    image,
    numberOfComments,
    id

}) => {
    return (
        <article className='post_container'>
            <div className='head_post'>
                <h4 className='author_post'>{author}</h4>
                <p className='subreddit_post'>to {subreddit}</p>
                <p className='data_post'>{time}</p>
            </div>
            <h1 className='title_post'>{title}</h1>
            {text
                ? <h4 className='text_post'>{text}</h4>
                : null

            }

            {image
                ? (
                    <div className='image_container'>
                        <img src={image} alt={title} />
                    </div>

                ) : null
            }
            <p className='comments_post'>comments:{numberOfComments}</p>
        </article>
    )
}

export default Post