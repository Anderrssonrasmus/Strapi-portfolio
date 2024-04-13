import React from 'react'

export default function Contact() {
    return (
        <>
            <div className='titleCard'>
                <h1>What's up?</h1>
                <span>Got questions or wanna chat?</span>
            </div>
            <div className='contact-options'>
                <a href="mailto:rasmus022.ra@gmail.com">
                    <h3>Reach me via E-mail</h3>
                    <p>rasmus022.ra@gmail.com</p>
                </a>
                <a href="https://linkedin.com/in/rasmus-andersson" target="_blank">
                    <h3>Get chatting on LinkedIn</h3>
                    <p>linkedin.com/in/rasmus-andersson</p>
                </a>
            </div>
        </>
    )
}
