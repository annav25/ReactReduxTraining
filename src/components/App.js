import React from 'react';
import Song from './Song'
import SongDetails from './SongDetails'


const App=()=>{
    return(
        <div className="ui grid container">  
            <div className="ui row">
                <div className="column eight wide"> 
                    <Song />
                </div>
                <div className="column eight wide">
                    <SongDetails/> 
                </div>           
            </div> 
        </div>
    )
};

export default App;
