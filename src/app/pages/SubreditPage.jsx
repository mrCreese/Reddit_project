import React from 'react'
import { useSelector } from 'react-redux'
import Posts from '../../components/posts/Posts'
import SubredditsHeader from '../../components/subredditsHeader/SubredditHeader'

const SubreditPage = () => {
    const { status } = useSelector(state => state.posts)
    return (
        <div>
            {status === 'resolved' && <SubredditsHeader />}
            <Posts />
        </div>
    )
}

export default SubreditPage