import React, { useState } from 'react';
import useForm from './utils/useForm';
import { useQuery } from 'react-query';

const BooksFetch = () => {

    const { isLoading, error, data } = useQuery('getBooks', () =>
        fetch('http://localhost:3001/api/books'))



    const { values, updateValue } = useForm({
        title: "",
        author: "",
    })

    const [selectedBook, setSelectedBook] = useState({
        title: '',
        author: ''
    })

    const [foundBooks, setFoundBooks] = useState([])


    const getBooksFromApi = async () => {
        const apiKey = "AIzaSyDurL_v5_EsJDBBfsB87dlUMy7hkEzytyc"
        let response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=title=${values.title}&key=${apiKey}`
            // `https://openlibrary.org/search.json?title=${values.title}&author=${values.author}`
        );
        let json = await response.json();
        // console.log(json.items.forEach(item => item.volumeInfo))
        json.items.forEach(item => console.log(item.volumeInfo.title))
        console.log(json.items)
        setFoundBooks(json.items)
        // setSelectedBook({...selectedBook, title: response.title})
    }

    console.log(foundBooks)
    return (
        <div>
            <div>
                <form>
                    <input type='text' name="title" id="title" value={values.title} onChange={updateValue}></input>
                    <input type='text' name="author" id="author" value={values.author} onChange={updateValue}></input>

                </form>
                <button onClick={getBooksFromApi}>Submit</button>
            </div>
            <div>
                {foundBooks && foundBooks.map(book =>
                    <div key={book.id}>
                        <p>{book.volumeInfo.title}</p>
                        <img src={book.volumeInfo.imageLinks.thumbnail}></img>
                    </div>
                )}
            </div>
        </div>
    )
}
export default BooksFetch