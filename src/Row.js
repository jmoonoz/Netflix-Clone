import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./style/Row.css";


function Row({ title, fetchUrl, isLargeRow }) {
    const img_url = "https://image.tmdb.org/t/p/original/";

    const [movies, setMovies] = useState([]);

    //snippet of code for specific condition
    useEffect(() => {
        // if [], run once when the row loads and dont run again
        // asyncronus call
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);



    return (
        <div className="row">
            {/* titls */}
            <h2>{title}</h2>
            <div className="row-posters">
                {/* row poster */}
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                        src={`${img_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    )
}
export default Row;