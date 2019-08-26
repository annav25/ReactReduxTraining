import {combineReducers} from 'redux';

//get song list- static for demo.
const SongListReducer=()=>{
    return [{title: 'no scrubs',duration: '4:05'},
    {title: 'macarena',duration: '3:05'},
    {title: 'all star',duration: '2:05'}];
}


const SelectedSongReducer=(selectedSong=null,action)=>{
    if (action.type==="SONG_SELECTED"){
        return action.payload;
    }
    return selectedSong;
}


export default combineReducers({songList:SongListReducer,selectedSong:SelectedSongReducer});
