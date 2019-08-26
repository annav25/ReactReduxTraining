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
          
        </div>
                   
     
        {/* <SongDetails/> */}
        </div>
    )
};

export default App;
