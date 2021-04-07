import React, { useState } from 'react';


const BooksFetch = () => {

    const [search, setSearch] = useState({
        title: "Harry+Potter",
        author: 'JK+Rowling',
    })

    const GetBooksFromApi = async () => {
        let response = await fetch(
            `https://openlibrary.org/search.json?title=${search.title}&author=${search.author}`
        );
        let json = await response.json();
        console.log(json)
        console.log('Hey')
    }

    GetBooksFromApi();
    return (
        <div>
            <form>
                <input type='text' label="Insert Title Here" ></input>
            </form>

        </div>
    )
}
export default BooksFetch