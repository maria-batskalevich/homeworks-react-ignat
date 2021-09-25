import React from 'react'
import './error.module.css'

function Error404() {
    return (
        <div>
            <h1>404 Error Page #1</h1>
            <p className="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p>
            <section className="error-container">
                <span><span>4</span></span>
                <span>0</span>
                <span><span>4</span></span>
            </section>
            <div className="link-container">
                <a target="_blank" href="https://www.silocreativo.com/en/creative-examples-404-error-css/"
                   className="more-link">Visit the original article</a>
            </div>
        </div>
    )
}

export default Error404
