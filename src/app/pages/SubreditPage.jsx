import React from 'react'
import Posts from '../../components/posts/Posts'
import SubredditsHeader from '../../components/subredditsHeader/SubredditHeader'

const SubreditPage = () => {
  return (
    <div>
      <SubredditsHeader />
      <Posts />
    </div>
  )
}

export default SubreditPage