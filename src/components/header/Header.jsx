import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import {
    changeSearchTerm,
    selectSearchTerm,
} from '../../app/slicers/searchTermSlice';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const searcedTerm = useSelector(selectSearchTerm);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeSearchTerm({ searchTerm }));
        navigate(`/search/${searchTerm}`);
        setSearchTerm('');
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className={styles.header}>
            <img
                className={styles.logo}
                src='./img/Reddit-logo.png'
                alt='logo reddit'
            />
            <div>
                <form>
                    <label>
                        <input
                            className={styles.input}
                            type='text'
                            id='searchTerm'
                            placeholder='Search for Topics'
                            value={searchTerm}
                            onChange={handleChange}
                        />
                    </label>
                    <input
                        className={styles.button}
                        type='submit'
                        value='search'
                        onClick={handleSubmit}
                    />
                </form>
                {searcedTerm && (
                    <h2 className={styles.search}>Search by {searcedTerm}</h2>
                )}
            </div>
            <a
                href='https://github.com/mrCreese'
                rel='noreferrer'
                target='_blank'
            >
                <img
                    className={styles.git}
                    src='./img/GitHub-Logo.png'
                    alt='logo Git'
                />
            </a>
        </div>
    );
};

export default Header;
