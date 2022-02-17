import React, { useState, useEffect } from 'react';
import axios from './axios';


function Row({title}) {

    const [movies, setMovies] = useState([]);

    //snippet of code for specific condition
    useEffect(()=>{
        // if [], run once when the row loads and dont run again

    },[]);

    
    return (
        <div>
        {/* titls */}
        <h2>{title}</h2>
        {/* constainer -> images */}

        </div>
    )
}
export default Row;