import React, { useState } from 'react';
import styles from './Header.module.scss'

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    /* --- */
    setSearchTerm('');
  }
  return (
    <div className={styles.header}>
      <img className={styles.logo} src="./img/Reddit-logo.png" alt="logo reddit" />
      <form>
        <label>
          <input className={styles.input} type="text"
            id="searchTerm"
            placeholder="Search for Topics"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
        </label>
        <input className={styles.button} type="submit" value="search" onClick={handleSubmit} />
      </form>
      <a href="https://github.com/mrCreese"  rel="noreferrer" target="_blank"><img className={styles.git} src="./img/GitHub-Logo.png" alt="logo Git" /></a>
    </div>
  )
}

export default Header