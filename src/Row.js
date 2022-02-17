import React, { useState, useEffect } from 'react';
import axios from './axios';


function Row({ title, fetchUrl }) {

    const [movies, setMovies] = useState([]);

    //snippet of code for specific condition
    useEffect(() => {
        // if [], run once when the row loads and dont run again
        // asyncronus call
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    return (
        <div>
            {/* titls */}
            <h2>{title}</h2>
            {/* constainer -> images */}

        </div>
    )
}
export default Row;