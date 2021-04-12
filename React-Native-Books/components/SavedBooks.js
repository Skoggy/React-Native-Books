
import React, { useState } from 'react';
import axios from 'axios';

import { useQuery } from 'react-query';

export default function SavedBooks() {

    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('http://localhost:3001/api/books').then(res =>
            res.json()
        )
    )
    data && data.forEach(thing => console.log(thing.title))
    return (
        <div>
            <p>This is the saved books section</p>
            {data && data.map(thing => <p key={thing._id}>{thing.title}</p>)}


        </div>
    )


}




