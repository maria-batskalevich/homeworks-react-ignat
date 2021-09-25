import React from 'react'
import './error.module.css'

function Error404() {
    return (
        <div>
            <a href="" className={"fa fa-arrow-left"}></a>
            <div className={"error"}>
                <h1>404</h1>
                <p>We're sorry but it looks like that page doesn't exist anymore.</p>
            </div>
        </div>
    )
}

export default Error404
