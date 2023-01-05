import React from 'react'

function Book(props) {
    const book = props.book
    return (
        <div>
            <h5>Title: {book.title}</h5>
            <p>Author: {book.author}</p>
            <p>Number of pages: {book.pages}</p>
        </div>
    )
}

export default Book