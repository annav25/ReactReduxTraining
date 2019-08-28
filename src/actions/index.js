//action creator=> return action
const selectSong=(song)=>{
    console.log("selectSong actions")
    return {
        type:"SONG_SELECTED",
        payload:song
    };
};

export {selectSong};
//or export const selectSong=....