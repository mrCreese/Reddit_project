import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Subredits from './components/subreddits/Subredits'
import styles from './App.module.scss'
import SubreditPage from './app/pages/SubreditPage'
import Filter from './components/filter/Filter'

const App = () => {

  return (
    <div>

      <Header />
      <div className={styles.main_container}>
        <section>
          <Subredits />
        </section>
        <section className={styles.posts}>
          <Filter />
          <Routes>
            <Route exact path='/r/:subreddit' element={<SubreditPage />} />
          </Routes>
        </section>
      </div>


    </div>
  )
}

export default App