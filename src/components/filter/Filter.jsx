import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../../app/slicers/filterSlice';

import './Filter.css';

const Filter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        const newTitle = e.target.title;
        dispatch(changeFilter({ nameOfFilter: newTitle }));
    };
    return (
        <div className='filter_container'>
            <div
                title='hot'
                className={filter === 'hot' ? 'active' : 'noActive'}
                onClick={handleClick}
            >
                Hot
            </div>
            <div
                title='top'
                className={filter === 'top' ? 'active' : 'noActive'}
                onClick={handleClick}
            >
                Top
            </div>
            <div
                title='new'
                className={filter === 'new' ? 'active' : 'noActive'}
                onClick={handleClick}
            >
                New
            </div>
        </div>
    );
};

export default Filter;
