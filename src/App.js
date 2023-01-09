import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Subredits from './components/subreddits/Subredits'
import styles from './App.module.scss'
import SubreditPage from './app/pages/SubreditPage'
import Filter from './components/filter/Filter'
import SearchPage from './app/pages/SearchPage'
import HomePage from './app/pages/HomePage'
import NotFoundPage from './app/pages/NotFoundPage'

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
            <Route  path='/' element={<HomePage />} />
            <Route  path='/r/:subreddit' element={<SubreditPage />} />
            <Route  path='/search/:searchTerm' element={<SearchPage />} />
            <Route  path='*' element={<NotFoundPage />} />
          </Routes>
        </section>
      </div>


    </div>
  )
}

export default App