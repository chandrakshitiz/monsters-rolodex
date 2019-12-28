import React from 'react';
import './search-box.styles.css';
const SearchBox=({placeHolder,handle})=>{
    return(
        <center>
        <input type="search" placeholder={placeHolder} onChange={handle}/>
        </center>

    )
}
export {SearchBox};