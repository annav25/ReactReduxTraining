import React from 'react';


const SongDetails=(props)=>{
    return (
        <div>
            <div>Details for:</div>
            <div> <label>Title:</label>{props.songSelected.title}</div>
            <div><label>Length:</label>{props.songSelected.duration}</div>
        </div>
    )
}

export default SongDetails;