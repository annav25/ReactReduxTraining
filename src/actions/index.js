//action creator=> return action
const selectSong=(song)=>{
    return {
        type:"SONG_SELECTED",
        payload:song
    };
};

export {selectSong};
//or export const selectSong=....