import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>This page doesn't exist. Go <Link to="/">home</Link></h1>
        </div>
    )
}

export default NotFoundPage