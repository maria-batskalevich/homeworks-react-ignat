import React from 'react'
import s from './error.module.scss'

function Error404() {
    return (
        <div className={s.error}>
            <h1>404</h1>
            <p>We're sorry but it looks like that page doesn't exist anymore.</p>
        </div>
    )
}

export default Error404
